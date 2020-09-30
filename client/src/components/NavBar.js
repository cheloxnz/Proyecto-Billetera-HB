import React from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from "react-native";

import LogoMenu from "../components/LogoMenu";
import Notification from "../components/Notification";
import LogoPostCons from '../components/LogoPostCons';

const Navbar = ({ navigation }) => {


    return (
        <View style={styles.header}>
            <View style={styles.menuContent}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <LogoMenu />
                </TouchableOpacity>
            </View>

            <View style={styles.icon} >
                <LogoPostCons />
            </View>

            <View style={styles.bellContent}>
                <TouchableOpacity onPress={() => navigation.navigate('My Dates')}>
                    <Notification />
                </TouchableOpacity>
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
        borderBottomWidth: 3,
        borderBottomColor: "black",
        borderStyle: 'solid',
    },
    menuContent: {
        width: "44.35%",
        alignItems: "center",
        marginTop: 8,
        marginLeft: 6
    },
    icon: {
        width: "11.3%",
        alignItems: "center",
        marginTop: 6,
        justifyContent: 'center',
        marginBottom: 5
    },
    bellContent: {
        width: "44.35%",
        alignItems: "center",
        marginTop: 7,
        marginLeft: 58
    },

})

export default connect()(Navbar)
