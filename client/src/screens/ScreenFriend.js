import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import Constants from 'expo-constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';
import Axios from 'axios';
import ListFriend from '../components/ListFriend';
import { getAllContacts, ip } from '../actions'



const ScreenFriend = ({ navigation, getAllContacts, account, contacts, onlineUser }) => {
    const [data, setData] = React.useState([])
    const [input, setInput] = React.useState('')
    useEffect(() => {
        getAllContacts(onlineUser.id)
    }, [])
    const handleContacts = text => {
        setInput(text)
        Axios.get(`http://${ip}:3005/contacts/addFriend?username=${text}`)
            .then(user => setData(user?.data))
            .catch(err => console.log(err));
    }

    return (
        <View style={styles.contenedorPrincipal}>
            <NavBar navigation={navigation} />
            <ImageBackground
                source={require('../assets/consolidated_dot.png')}
                style={styles.background}>
                <View style={styles.contenedorAgregar}>
                    <View style={styles.contenedorSecAgregar}>
                        <Text style={{ color: 'black', fontWeight: '700', fontSize: 20, textAlign: 'center', backgroundColor: 'yellow' }}>
                            Here you can add friends through username
                    </Text>
                        <View style={{ borderBottomColor: 'yellow', borderBottomWidth: 3 }} >
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={{ width: '35%', marginTop: 26, paddingTop: 10 }}>
                                    <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, textAlign: 'center' }}>
                                        Username  <FontAwesome name='angle-double-right' size={26} color={'white'} />
                                    </Text>
                                </View>
                                <View style={{ width: '65%', marginTop: 12, paddingTop: 10 }}>
                                    <SearchBar
                                        onChangeText={text => { handleContacts(text) }}
                                        value={input}
                                        inputStyle={{ backgroundColor: 'white' }}
                                        containerStyle={{ backgroundColor: 'black', borderWidth: 1, borderRadius: 8 }}
                                        ForwardRef={'#g5g5g5'}
                                        placeholder={'Search username'}
                                    />
                                </View>
                            </View>
                            <Text style={{ color: 'white', fontWeight: '700', fontSize: 14, textAlign: 'center' }}>
                                (Enter the USERNAME without spaces or hyphens)
                    </Text>
                        </View>

                        <View>
                            <View>
                                <Text style={{ color: 'black', fontWeight: '700', fontSize: 20, textAlign: 'center', backgroundColor: 'yellow' }}>Users list</Text>
                            </View>
                        </View>
                        <ScrollView style={{ marginTop: 25 }} >
                            {data.length >= 1 ? data.map((user, i) => <ListFriend users={user} contacts={contacts} text={input} key={i} />) : null}
                        </ScrollView>

                    </View>
                    <FooterNew navigation={navigation} />
                </View>
            </ImageBackground>
        </View>
    )
}



const styles = StyleSheet.create({
    contenedorPrincipal: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
    background: {
        flex: 1,
        width: '100%',
    },
    contenedorAgregar: {
        width: "100%",
        height: "100%",
        paddingTop: Constants.statusBarHeight,
    },
    contenedorSecAgregar: {
        width: '100%',
        height: '100%',
        flex: 1
    },
    parrafoContact: {
        fontSize: 20,
        color: 'white',
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 30
    },
})

const mapStateToProps = state => {
    return {
        onlineUser: state.onlineUser,
        contacts: state.contacts,
        account: state.account
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllContacts: (id) => dispatch(getAllContacts(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenFriend);