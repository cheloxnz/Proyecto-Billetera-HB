import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, Alert } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import { getAllContacts, getAllUsers, friendCVU, addFriend } from '../actions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ListFriend = ({ users, onlineUser, addFriend,contacts, text }) => {
    console.log('---')
    console.log(contacts)
    console.log(text)
    var flag = false
    return (
        <View style={styles.bg}>
            {text?.length == 0? flag = true:onlineUser?.id == users.id ? flag = true : contacts?.map((c) => {if (c.id == users.id){  flag = true; return}})}
            {flag? null :  
                <View >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <List.Item titleStyle={{ fontSize: 20, fontWeight: '700' }}
                            left={() =>
                                <Text style={{ fontSize: 20, color: 'black' }}> {users?.username} </Text>}
                        />
                        <TouchableHighlight
                            style={{ backgroundColor: 'black', color: 'black', width: '20%', alignItems: 'center', justifyContent: 'center', marginRight: 8, marginVertical:8, padding: 3, borderRadius: 7 }}
                            onPress={() => addFriend(onlineUser.id, users.username)}
                        >
                            <Text>
                                <FontAwesome name='plus' size={20} color={'yellow'} />
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <Divider />
                </View>}
    </View>
    )
};

const styles = StyleSheet.create({

    bg: {
        marginLeft: '10%',
        width: '80%',
        backgroundColor: 'white'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        getAllContacts: (id) => dispatch(getAllContacts(id)),
        getAllUsers: () => dispatch(getAllUsers()),
        friendCVU: (cvu) => dispatch(friendCVU(cvu)),
        addFriend: (id, username) => dispatch(addFriend(id, username))
    }
}

const mapStateToProps = state => {
    return {
        onlineUser: state.onlineUser,
        contacts: state.contacts,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListFriend);