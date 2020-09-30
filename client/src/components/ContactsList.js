import React, { useEffect } from 'react';
import { Text, ScrollView, View, StyleSheet, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { List, Divider, Modal, Portal } from 'react-native-paper';
import { connect } from 'react-redux';
import { getAllContacts, getAllUsers, friendCVU, deleteFriend } from '../actions'
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const ContactsList = ({ contacts, getAllContacts, getAllUsers, navigation, friendCVU, onlineUser, deleteFriend }) => {
  const [visible, setVisible] = React.useState(false);

	const showModal = () => setVisible(true);

	const hideModal = () => setVisible(false);

  const buttonHandle = () => {
    deleteFriend(onlineUser.id, contacts.id)
  }
 
  return (
    <View style={{ width: '100%' }}>
      <Portal >
						<Modal visible={visible} onDismiss={hideModal}>
							<View style={{ height: 300, backgroundColor: 'white', width: '90%', borderRadius: 10, alignSelf: 'center' }}>
								<Text style={{ color: 'black', borderRadius: 10, fontSize: 24, textAlign: 'center', backgroundColor: 'yellow', width: '80%', marginLeft: '10%', marginTop: '5%', padding: 10}}>Are you sure to delete this friend?</Text>
								<TouchableHighlight onPress={() => buttonHandle()} underlayColor= 'white' activeOpacity={0.5} style={{width: '60%', alignSelf: 'center', marginTop: 40}} >
                  <View style={{backgroundColor: 'red', width: '100%', alignSelf: 'center', height: 50, borderRadius: 20}}>
                    <Text style={{color: 'white', fontSize: 24, textAlign: 'center', marginTop: '2%'}}>Delete</Text>
                  </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={() => hideModal()} style={{width: '60%', alignSelf: 'center', marginTop: 20}}  underlayColor= 'black' activeOpacity={0.5}>
                <View style={{backgroundColor: '#00296B', width: '100%', alignSelf: 'center', height: 50, borderRadius: 20}}>
                    <Text style={{color: 'white', fontSize: 24, textAlign: 'center', marginTop: '2%'}}>Cancel</Text>
                  </View>
                </TouchableOpacity>
							</View>
						</Modal>

					</Portal>
      <TouchableHighlight style={{ width: '6%', top: -14, position: 'absolute', marginBottom: 20, marginTop: 30, marginLeft: 10 }} >
        <Text onPress={() => { showModal() }}>
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