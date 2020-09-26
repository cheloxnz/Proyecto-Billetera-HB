import React, { useState } from 'react'
import { ImageBackground, View, StyleSheet, Text, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux'
import { Path } from 'react-native-svg'
import { AreaChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import * as scale from 'd3-scale'
import Constants from 'expo-constants';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';



const Chart = ({ navigation, transfersAll, account }) => {

    const [val, setVal] = useState(0)

    var valores = []
    var fechas = []
    transfersAll?.map(t => {
        if (t.emisor == account.Naccount) {
            valores.push({Quantity: -t.Quantity, date: new Date(t.createdAt)})
            //fechas.push(t.createdAt)
        }
        if (t.receptor == account.Naccount) {
            valores.push({Quantity: t.Quantity, date: new Date(t.createdAt)})
            //fechas.push(t.createdAt)
        }
    })
    var deReversa = valores.reverse()
    deReversa.unshift({Quantity: 0, date: new Date('2018, 07, 24')})
    console.log(deReversa)

    const data = deReversa

    const Line = ({ line }) => (
        <Path
            key={'line'}
            d={line}
            stroke={'rgb(134, 65, 244)'}
            fill={'none'}
        />
    )

    return (
        <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}>
            <View style={styles.content}>
                <NavBar navigation={navigation} />
                <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{  backgroundColor: 'white' }}
                    contentInset={{ top: 30 }}
                    svg={{ fontSize: 10, fill: 'black', fontWeight: 'bold' }}
                    numberOfTicks={ data.length }
                    yAccessor={ ({ item }) => item.Quantity }
                    formatLabel={ (value) => value}
                />
                 <View style={{ flex: 1}}>
                <AreaChart
                    style={{ height: 200, backgroundColor: 'red' }}
                    data={data}
                    contentInset={{ top: 30, bottom: 30 }}
                    yAccessor={ ({ item }) => item.Quantity }
                    xAccessor={ ({ item }) => item.date }
                    curve={shape.curveNatural}
                    xScale={ scale.scaleTime }
                    svg={{ fill: 'rgba(134, 65, 244, 0.2)' }}
                >
                    <Grid />
                    <Line />
                </AreaChart>
                </View>
            </View>
                <XAxis
                    data={ data }
                    svg={{
                        fill: 'black',
                        fontSize: 12,
                        fontWeight: 'bold',
                    }}
                    xAccessor={ ({ item }) => item.date }
                    formatLabel={ (value) => value.getUTCDate()  + '/' + (value.getMonth() + 1)   }
                    //scale={ scale.scaleUtc() }
                    //numberOfTicks={ data.length }
                    style={{ marginHorizontal: -15, height: 20, backgroundColor: 'white' }}
                    contentInset={{ left: 35, right: 25 }}
                />
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