import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import { getAllContacts, getAllUsers, friendCVU } from '../actions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ListFriend = ({ contacts, getAllContacts, getAllUsers, navigation, friendCVU }) => {
    console.log(contacts)
    return (
        <View style={styles.bg}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <List.Item titleStyle={{ fontSize: 20, fontWeight: '700' }}
                        left={() =>
                            <Text style={{ fontSize: 20, color: 'black' }}> {contacts?.username} </Text>}
                    />
                    <Text style={{ backgroundColor: 'black', color: 'black', width: '20%', textAlign: 'center', marginRight: 6, marginVertical: 10, padding: 3, borderBottomLeftRadius: 7, borderTopLeftRadius: 7 }}
                    //  onPress={() => }
                    >
                        <FontAwesome name='plus' size={18} color={'yellow'} />
                    </Text>
                </View>
                <Divider />
            </View>
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
        friendCVU: (cvu) => dispatch(friendCVU(cvu))
    }
}

const mapStateToProps = state => {
    return {
        onlineUser: state.onlineUser
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListFriend);