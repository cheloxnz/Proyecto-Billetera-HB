import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";
import { Icon } from 'react-native-elements';


const FooterNew = ({navigation}) => {


  return (
      <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}  >
                <View style={styles.icons}>
                    <Icon name='home' size={40} />
                    <Text style={styles.text}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Transfers')}>
                <View style={styles.icons}>
                    <Icon name='autorenew' size={40} />
                    <Text style={styles.text}>Transfers</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Mycard')} >
                <View style={styles.icons}>
                    <Icon  name='payment' size={40} />
                    <Text style={styles.text}>Card</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Payments')}>
                <View style={styles.icons}>
                    <Icon   name='assessment' size={40} />
                    <Text style={styles.text}>Pays</Text>
                </View>
            </TouchableOpacity>


        </View>
  );
};


const styles = StyleSheet.create({
    footer: {
        width: "100%",
        height:'8%',
        backgroundColor:'#F7FE2E',
        borderTopColor:'yellow',
        borderTopWidth:2,
        flexDirection:'row',
        justifyContent:'space-around',
    },
    icons: {
        height:'100%',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },
    text: {
      position: 'relative',
      top: -7
    }
})


export default FooterNew;
