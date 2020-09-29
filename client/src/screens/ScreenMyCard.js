import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Switch } from 'react-native-paper';
import ListP from '../components/ListInfo';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import { cardState } from '../actions'

const MyCard = ({ navigation, account, cardState, onlineUser }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
    };
    useEffect(() => {
        console.log('concha cajeta')
        if (!isSwitchOn) {
            cardState(account?.CVU, onlineUser.id, 'inactive')
        }
        if (isSwitchOn) {
            cardState(account?.CVU, onlineUser.id, 'active')
        }

    }, [isSwitchOn])
    return (
        <View style={styles.contenedorCard}>

            <NavBar navigation={navigation} />

            <ImageBackground
                source={require('../assets/consolidated_dot.png')}
                style={styles.background}
            >
                <View style={styles.contenedorSegundo}>
                    <View style={styles.contenedorTarjeta}>
                        <View style={{ width: '100%', height: '60%', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <Image
                                style={{ width: '50%', height: '100%', resizeMode: 'center' }}
                                source={require('../assets/card.png')}
                            />
                        </View>
                        <Text style={styles.infoCard}>
                            Your card ended in {account?.card?.slice(12, 16)}
                        </Text>
                        <View style={styles.contenedorDes}>
                            <Text style={styles.parrafoDes}>
                                Temporarily disable the account
                            </Text>
                            <View style={styles.switchC}>
                                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                            </View>
                        </View>
                    </View>
                    <View style={styles.contenedorInform}>
                        <ListP />
                    </View>

                </View>
            </ImageBackground>

            {/* FOOTER VA EN TODOS LOS SCREEN  */}
            <FooterNew navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorCard: {
        width: "100%",
        height: "100%",

    },
    contenedorSegundo: {
        width: '100%',
        height: '88%'
    },
    contenedorTarjeta: {
        width: '100%',
        height: '38%',
    },
    infoCard: {
        fontSize: 20,
        marginTop: 10,
        marginRight: 70,
        fontWeight: '700',
        textAlign: 'center',
        color: 'white'
    },
    contenedorDes: {
        width: '100%',
        height: '40%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'yellow'
    },
    parrafoDes: {
        width: '70%',
        fontSize: 18,
        marginTop: 30,
        alignItems: 'flex-start',
        textAlign: 'center',
        color: 'black',
        fontWeight: '700'
    },
    switchC: {
        width: '8%',
        height: '20%',
        alignItems: 'flex-start',
        marginTop: 34,
        backgroundColor: 'black',
        borderRadius: 10,
    },
    contenedorInform: {
        width: '100%',
        height: '50%',
        marginTop: 90,
        alignItems: 'center'
    }
})

const mapStateToProps = state => {
    return {
        account: state.account,
        onlineUser: state.onlineUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        cardState: (cvu, id, estado) => dispatch(cardState(cvu, id, estado))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyCard);