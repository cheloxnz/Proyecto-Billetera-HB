import React, { useEffect } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Switch } from 'react-native-paper';
import ListP from '../components/ListInfo';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import { cardState } from '../actions';
import Constants from 'expo-constants';




const MyCard = ({ navigation, account, cardState, onlineUser }) => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(true);
    const onToggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
    };
    useEffect(() => {
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
                        <Text style={styles.infoCard}>
                            Your card ended in {account?.card?.slice(12, 16)}
                        </Text>
                        <View style={{ width: '100%', height: '80%', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                            <Image
                                style={{ width: '70%', height: '100%', resizeMode: 'center' }}
                                source={require('../assets/card.png')}
                            />
                        </View>
                        <View style={styles.contenedorDes}>
                            <Text style={styles.parrafoDes}>
                              {account?.state == 'inactive'?'Your account is disabled': 'Your account is enabled'}
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
        paddingTop: Constants.statusBarHeight,

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
        width: '100%',
        fontSize: 20,
        marginTop: 10,
        marginRight: 70,
        fontWeight: '700',
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'yellow'
    },
    contenedorDes: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: 'yellow',
        alignItems: 'center'
    },
    parrafoDes: {
        width: '70%',
        fontSize: 18,
        alignItems: 'flex-start',
        textAlign: 'center',
        color: 'black',
        fontWeight: '700'
    },
    switchC: {
        alignItems: 'flex-start',
        borderRadius: 10,
    },
    contenedorInform: {
        width: '100%',
        height: '40%',
        marginTop: 78,
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