import React, { useEffect } from 'react';
import { Text, ScrollView, View, StyleSheet, Button, TouchableHighlight } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import { getAllContacts, getAllUsers, friendCVU, deleteFriend } from '../actions'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ContactsList = ({ contacts, getAllContacts, getAllUsers, navigation, friendCVU, onlineUser, deleteFriend }) => {



  return (
    <View style={{ width: '100%' }}>
      <TouchableHighlight style={{ width: '6%', top: -14, position: 'absolute', marginBottom: 20, marginTop: 30, marginLeft: 10 }} >
        <Text onPress={() => { deleteFriend(onlineUser.id, contacts.id) }}>
          <FontAwesome name='trash' size={20} color={'white'} />
        </Text>
      </TouchableHighlight>
      <View style={styles.bg}>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
            <List.Item titleStyle={{ fontSize: 20, fontWeight: '700' }}
              left={() =>
                <Text style={{ fontSize: 20, color: 'black', }}> {contacts?.name + ' ' + contacts?.surname} </Text>}
            />
            <Text style={{ backgroundColor: 'yellow', color: 'black', width: '20%', textAlign: 'center', marginVertical: 10, padding: 5, borderBottomLeftRadius: 7, borderTopLeftRadius: 7 }}
              onPress={() => { navigation.navigate('InputTransfer'), friendCVU(contacts?.account?.CVU) }}>
              <FontAwesome name='share' size={20} color={'black'} />
            </Text>
          </View>
          <Divider />
        </View>
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
    friendCVU: (cvu) => dispatch(friendCVU(cvu)),
    deleteFriend: (userId, id) => dispatch(deleteFriend(userId, id))
  }
}

const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser,
    /*contacts: state.contacts,*/
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);