import React from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import { getAllContacts, getAllUsers, friendCVU, addFriend } from '../actions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ListFriend = ({ contacts, onlineUser, addFriend }) => {

    console.log(contacts)
    return (
        <View style={styles.bg}>
            {onlineUser?.id == contacts.id ? null :
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                        <List.Item titleStyle={{ fontSize: 20, fontWeight: '700' }}
                            left={() =>
                                <Text style={{ fontSize: 20, color: 'black' }}> {contacts?.username} </Text>}
                        />
                        <TouchableHighlight style={{ backgroundColor: 'black', color: 'black', width: '20%', textAlign: 'center', marginRight: 6, marginVertical: 10, padding: 3, borderBottomLeftRadius: 7, borderTopLeftRadius: 7 }} onPress={() => addFriend(onlineUser.id, contacts.username)}>
                        <Text >
                            <FontAwesome name='plus' size={18} color={'yellow'} />
                        </Text>
                    </TouchableHighlight>
                    </View>
                    <Divider />
                    </View>
            }
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
        onlineUser: state.onlineUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListFriend);