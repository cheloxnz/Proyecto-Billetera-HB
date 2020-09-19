import React from "react";
import { connect } from "react-redux";
import {View, Text, TextInput, StyleSheet, TouchableOpacity, Button} from "react-native";

import LogoMenu from "../components/LogoMenu";
import Notification from "../components/Notification";
import LogoPostCons from '../components/LogoPostCons';

const Navbar = ({navigation}) => {


    return (
                <View style={styles.header}>
                        <View style={styles.menuContent}>
                            <TouchableOpacity onPress={() => navigation.openDrawer()}   >
                                <LogoMenu />
                            </TouchableOpacity>
                        </View>
                    
                        <View style={styles.icon} >
                            <LogoPostCons/> 
                        </View>
                    
                        <View style={styles.bellContent}>
                            <Notification />
                        </View>
                </View>          
       
    )
};
    
const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: "row",
        backgroundColor: "#F7FE2E",
        height: "7%",
        justifyContent: "space-between",
        
    },
    bellContent: {
        width: 150,
        alignItems: "center",
        marginTop: 6,
        alignItems: 'flex-start',
        marginLeft: 24
    },
    icon: {
        width: 120,
        alignItems: "flex-start",
        paddingTop: 6,
        marginLeft: 20,
        marginTop: 6,
    },
    menuContent: {
        width: 150,
        alignItems: "flex-start",
        marginLeft: 6,
        marginTop: 6,
    },
  
})

export default connect()(Navbar)