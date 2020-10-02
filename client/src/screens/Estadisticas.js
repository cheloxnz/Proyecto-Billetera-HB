import React, { useEffect, useState } from 'react'
import { ImageBackground, View, StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { connect } from 'react-redux'
import { Path } from 'react-native-svg'
import Constants from 'expo-constants';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import { LineChart, XAxis, Grid, YAxis, AreaChart } from 'react-native-svg-charts'
import * as scale from 'd3-scale'
import * as shape from 'd3-shape'
import { format, setHours, getMonth, setMonth, setDate, getDate } from 'date-fns'



const Chart = ({ navigation, transfersAll, account, onlineUser }) => {
    const [data, setData] = useState([])
    const [neg, setNegativos] = useState([])

    useEffect(() => {
        const modelo2 = []
        transfersAll?.map(t => {
            modelo2.push({
                value: onlineUser.name + ' ' + onlineUser.surname == t.nombreReceptor ? t.Quantity : - t.Quantity,
                date: t.createdAt.substr(0, 10),
            });
        });
        //setDay(new Date(t.createdAt.substr(0, 4), t.createdAt.substr(5, 2), t.createdAt.substr(8, 2)), t.createdAt.substr(8, 2))
        // for (let i = 0; i < modelo2.length; i++) {
        //    if (! modelo2[i].date ) modelo2[i].date
        //     for (let j = i; j < modelo2.length; j++) {
        //         if (modelo2[i].date == modelo2[j].date) {
        //             arr.push[modelo2[j].value]
        //             modelo2.splice(j, 1)
        //         }
        //     }
        // }
        const negativos = []
        let result = Object.values(modelo2.reduce((a, { value, date }) => {
            if (value < 0) {
                negativos.push({ date: date, value: value });
                value = 0;
            }
            if (!a[date])
                a[date] = Object.assign({}, { value, date });
            else a[date].value += value
            return a;
        }, {}));

        let result2 = Object.values(negativos.reduce((a, { value, date }) => {
            if (!a[date])
                a[date] = Object.assign({}, { value, date });
            else a[date].value += value
            return a;
        }, {}));

        result.forEach(m => m.date = new Date(m.date.substr(0, 4), m.date.substr(5, 2), m.date.substr(8, 2)))
        result.forEach(m => {
            m.date.setMonth(m.date.getMonth() - 1)
        })
        result2.forEach(m => m.date = new Date(m.date.substr(0, 4), m.date.substr(5, 2), m.date.substr(8, 2)))
        result2.forEach(m => {
            m.date.setMonth(m.date.getMonth() - 1)
            m.value = -m.value
        })

        setData(result)
        setNegativos(result2)
    }, [transfersAll])


    const axesSvg = { fontSize: 10, fill: 'grey' };
    const verticalContentInset = { top: 10, bottom: 10 }
    const xAxisHeight = 30

    return (
        <View>
            
                <View style={styles.content}>
                    <ImageBackground
                        source={require('../assets/consolidated_dot.png')}
                        style={styles.background}>
                        <NavBar navigation={navigation} />
                        <View>
                            <Text style={{ color: 'yellow', fontSize: 24, fontWeight: "bold", marginBottom: 20, marginTop: 10,textAlign: 'center' }}>Equivalent income by day</Text>
                            <ScrollView>
                                <View style={{ height: 200, padding: 20, flexDirection: 'row', backgroundColor: 'white' }}>
                                    <YAxis
                                        data={data}
                                        style={{ marginBottom: xAxisHeight }}
                                        contentInset={verticalContentInset}
                                        svg={axesSvg}
                                        numberOfTicks={6}
                                        yAccessor={({ item }) => item.value}
                                    />
                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <AreaChart
                                            style={{ flex: 1 }}
                                            data={data}
                                            yAccessor={({ item }) => item.value}
                                            xAccessor={({ item }) => item.date}
                                            xScale={scale.scaleTime}
                                            contentInset={{ top: 10, bottom: 10 }}
                                            svg={{ fill: 'rgba(50,205,50, 0.6)' }}
                                            curve={shape.curveLinear}
                                        >
                                            <Grid />
                                        </AreaChart>
                                        <XAxis
                                            xAccessor={({ item }) => item.date}
                                            scale={scale.scaleTime}
                                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                                            data={data}
                                            formatLabel={(value, index) => format(value, 'dd/MM')}
                                            contentInset={{ left: 10, right: 10 }}
                                            svg={axesSvg}
                                            numberOfTicks={6}
                                        />
                                    </View>
                                </View>
                            </ScrollView>
                            <Text style={{ color: 'yellow', fontSize: 24, fontWeight: "bold", marginBottom: 20, marginTop: 10, textAlign: 'center' }}>Equivalent expenses by day</Text>
                            <ScrollView>
                                <View style={{ height: 200, padding: 20, flexDirection: 'row', backgroundColor: 'white' }}>
                                    <YAxis
                                        data={neg}
                                        style={{ marginBottom: xAxisHeight }}
                                        contentInset={verticalContentInset}
                                        svg={axesSvg}
                                        numberOfTicks={6}
                                        yAccessor={({ item }) => item.value}
                                    />
                                    <View style={{ flex: 1, marginLeft: 10 }}>
                                        <AreaChart
                                            style={{ flex: 1 }}
                                            data={neg}
                                            yAccessor={({ item }) => item.value}
                                            xAccessor={({ item }) => item.date}
                                            xScale={scale.scaleTime}
                                            contentInset={{ top: 10, bottom: 10 }}
                                            svg={{ fill: 'rgba(178,34,34, 0.6)' }}
                                            curve={shape.curveLinear}
                                        >
                                            <Grid />
                                        </AreaChart>
                                        <XAxis
                                            xAccessor={({ item }) => item.date}
                                            scale={scale.scaleTime}
                                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                                            data={neg}
                                            formatLabel={(value, index) => format(value, 'dd/MM')}
                                            contentInset={{ left: 10, right: 10 }}
                                            svg={axesSvg}
                                            numberOfTicks={6}
                                        />
                                    </View>
                                </View>
                            </ScrollView>
                        </View>

                    </ImageBackground>
                    <FooterNew navigation={navigation} />
                </View> 
        </View>
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