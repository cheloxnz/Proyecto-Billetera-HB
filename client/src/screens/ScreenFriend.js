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


const ScreenFriend = ({ navigation, getAllContacts, account, contacts, onlineUser }) => {
    const [data, setData] = React.useState([])
    const [input, setInput] = React.useState('')


    const handleContacts = text => {
        setInput(text)
        Axios.get(`http://localhost:3005/contacts/addFriend?username=${text}`)
            .then(user => setData(user?.data))
            .catch(err => console.log(err));
    }
    console.log(data)

    useEffect(() => {
        console.log('EJECUTANDO P')
    }, [])

    console.log(input)
    console.log(data)

    return (
        <ImageBackground
            source={require('../assets/consolidated_dot.png')}
            style={styles.background}>
            <View style={styles.contenedorAgregar}>
                <NavBar navigation={navigation} />
                <View style={styles.contenedorSecAgregar}>
                    <Text style={{ backgroundColor: 'yellow', color: 'black', fontSize: 20, textAlign: 'center', marginTop: 30, paddingTop: 10, paddingBottom: 10 }}>
                        Here you can add friends through username
                    </Text>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ width: '40%', marginTop: 26, borderBottomColor: 'yellow', borderBottomWidth: 3, paddingTop: 20, paddingBottom: 20 }}>
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', paddingTop: 6 }}>
                                Username  <FontAwesome name='angle-double-right' size={26} color={'white'} />
                            </Text>
                        </View>
                        <View style={{ width: '60%', marginTop: 12, borderBottomColor: 'yellow', borderBottomWidth: 3, paddingTop: 20, paddingBottom: 20 }}>
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
                    <Text style={{ color: '#F2F2F2', fontSize: 18, textAlign: 'center', marginTop: 20 }}>
                        Enter the USERNAME without spaces or hyphens
                    </Text>

                    <View>
                        <View>
                            <Text style={styles.parrafoContact}>List Contacts</Text>
                        </View>
                    </View>
                    <ScrollView>
                        {data.length >= 1 ? data.map(contacts => <ListFriend contacts={contacts} />) : null}
                    </ScrollView>

                </View>
                <TouchableOpacity style={{ width: '100%', marginBottom: 40, marginTop: 20, alignItems: 'center' }}>
                    <Text style={{ width: '80%', textAlign: 'center', color: 'white', fontSize: 20, backgroundColor: '#00296B', padding: 8 }}>
                        Verify
                    </Text>
                </TouchableOpacity>
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

export default connect(mapStateToProps)(ScreenFriend);