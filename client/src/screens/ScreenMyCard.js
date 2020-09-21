import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet,ImageBackground, Button } from 'react-native';
import NavBar from '../components/NavBar';
import Switch from '../components/Switch';
import ListP from '../components/ListInfo';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FooterNew from '../components/FooterNew';

const MyCard = ({navigation}) => {
    return (
        <View style={styles.contenedorCard}>    
                                         
            <NavBar navigation={navigation}/>
        
            <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}
            >
                <View style={styles.contenedorSegundo}>
                        <View style={styles.contenedorTarjeta}>
                            <View style={styles.tarjeta}>
                                <Text style={styles.contenedorHenryBank}>
                                    Henry Bank
                                </Text>
                                <Text style={styles.cardTar}>
                                <FontAwesome name={'cc-visa'} size={30} style={{color: 'black'}} />
                                </Text>
                            </View>
                            <Text style={styles.infoCard}>
                                Your card ended in:
                            </Text>
                            <View style={styles.contenedorDes}>
                                <Text style={styles.parrafoDes}>
                                    Temporarily disable the account
                                </Text>
                                <View style={styles.switchC}>
                                    <Switch/>
                                </View>
                            </View>
                        </View>
                        <View style={styles.contenedorInform}>
                                <ListP/>
                        </View>
                       
                </View>    
            </ImageBackground> 
            
            {/* FOOTER VA EN TODOS LOS SCREEN  */}   
            <FooterNew navigation={navigation}/>
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
        height: '88%',
    },
    contenedorTarjeta: {
        width: '100%',
        height: '38%',
    },
    tarjeta: {
        width: '55%',
        height: '45%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#dddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 85,
        marginTop: 20,
        backgroundColor: '#d9d9d9'
    },
    contenedorHenryBank: {
        fontSize: 20,
        color: 'black',
        fontWeight: '700',
        marginTop: 6,
        marginLeft: 10
    },
    cardTar: {
        width: '100%',
        height: '70%',
        marginVertical: 40,
        marginHorizontal: 140
    },
    infoCard: {
        fontSize: 28,
        marginTop: 10,
        marginRight: 70,
        fontWeight: '700',
        textAlign: 'center',
        color: 'white'
    },
    contenedorDes: {
        width: '100%',
        
    },
    parrafoDes: {
        width: '70%',
        fontSize: 18,
        marginTop: 10,
        marginHorizontal: 10,
        color:'white'
    },
    switchC: {
        marginVertical: -22
    },
    contenedorInform: {
        width: '100%',
        height: '50%',
    }
})

export default connect(null) (MyCard);