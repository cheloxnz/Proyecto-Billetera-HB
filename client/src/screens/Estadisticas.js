import React, { useState } from 'react'
import { Grid, BarChart, YAxis } from 'react-native-svg-charts'
import { LinearGradient, Stop, Defs } from 'react-native-svg'
import { ImageBackground, View, StyleSheet, Text, StatusBar, Alert } from 'react-native';
import { connect } from 'react-redux'
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
            valores.push(-t.Quantity)
            fechas.push(t.createdAt)
        }
        if (t.receptor == account.Naccount) {
            valores.push(t.Quantity)
            fechas.push(t.createdAt)
        }
    })
    var deReversa = valores.reverse()
    console.log(valores)

    const data  = deReversa
  
    return (
        <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}>
            <View style={styles.content}>
                <NavBar navigation={navigation} />
                <YAxis
                    data={data}
                    yAccessor={({ index }) => index}
                    scale={scale.scaleBand}
                    contentInset={{ top: 10, bottom: 10 }}
                    spacing={0.2}
                    formatLabel={(_, index) => data[ index ].label}
                />
                <BarChart
                    style={{ height: 200, backgroundColor: 'white', margin: 15, borderRadius: 7, padding: 5 }}
                    data={data}
                    contentInset={{ top: 20, bottom: 20 }}
                    svg={{
                        strokeWidth: 2,
                        fill: 'black',
                    }}>
                    <Grid />
                </BarChart>
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