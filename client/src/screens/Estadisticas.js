import React, { useState } from 'react'
import { ImageBackground, View, StyleSheet, Text, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux'
import { Path } from 'react-native-svg'
import Constants from 'expo-constants';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import { LineChart, XAxis, Grid, YAxis , AreaChart } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import {format, setDay, setHours} from 'date-fns'


const Chart = ({ navigation, transfersAll, account }) => {
            console.log(transfersAll)
    
         const data = [
             {
                 value: 0,
                 date: setDay(new Date(2018, 0, 0), 6),
             },
             {
                 value: 100,
                 date: setDay(new Date(2018, 0, 0), 9),
             },
             {
                 value: 150,
                 date: setDay(new Date(2018, 0, 0), 15),
             },
             {
                 value: 100,
                 date: setDay(new Date(2018, 0, 0), 18),
             },
             {
                 value: 200,
                 date: setDay(new Date(2018, 0, 0), 21),
             },
             {
                 value: 500,
                 date: setDay(new Date(2018, 0, 0), 24),
             },
         ]
        const data2 = [ 0, 100, 150, 100,  200, 500]

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30
    return (
        <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}>
            <View style={styles.content}>
                <NavBar navigation={navigation} />
                <View style={{ height: 200, padding: 20, flexDirection: 'row',backgroundColor: 'white'}}>
                <YAxis
                    data={data2}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                <AreaChart
                    style={{ flex: 1 }}
                    data={ data }
                    yAccessor={ ({ item }) => item.value }
                    xAccessor={ ({ item }) => item.date }
                    xScale={ scale.scaleTime }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                    curve={ shape.curveLinear }
                >
                    <Grid/>
                </AreaChart>
                    <XAxis
                     xAccessor={ ({ item }) => item.date }
                    scale={ scale.scaleTime }
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => format(value, 'dd/MM')}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                        numberOfTicks={ 6 }
                    />
                </View>
            </View>
            {/* fechaaaaaas */}
                 <View style={{ height: 200, padding: 20, backgroundColor: 'white', }}>
                <YAxis
                    data={data}
                    style={{ marginBottom:  20  }}
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={
                        { fontSize: 10, fill: 'grey' }
                    }
                    numberOfTicks={6}
                    formatLabel={(data) => data.value}
                    scale={ scale.scaleTime }
                    xAccessor={ ({ item }) => item.value }
                />
                <AreaChart
                    style={{ flex: 1 }}
                    data={ data }
                    yAccessor={ ({ item }) => item.value }
                    xAccessor={ ({ item }) => item.date }
                    xScale={ scale.scaleTime }
                    contentInset={{ top: 10, bottom: 10 }}
                    svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                    curve={ shape.curveLinear }
                >
                    <Grid/>
                </AreaChart>
                
                <XAxis
                    data={ data }
                    svg={{
                        fill: 'black',
                        fontSize: 8,
                        fontWeight: 'bold',
                        rotation: 20,
                        originY: 30,
                        y: 5,
                    }}
                    xAccessor={ ({ item }) => item.date }
                    scale={ scale.scaleTime }
                    numberOfTicks={ 6 }
                    style={{ marginHorizontal: -15, height: 20 }}
                    contentInset={{ left: 10, right: 25 }}
                    formatLabel={ (value) => format(value, 'dd/MM') }
                />
            </View>


                <FooterNew navigation={navigation} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    content: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
})

const mapStateToProps = state => {
    return {
        account: state.account,
        onlineUser: state.onlineUser,
        transfersAll: state.transfersAll,
        users: state.users,
        balance: state.balance,
        accounts: state.accounts
    }
}

export default connect(mapStateToProps, null)(Chart)