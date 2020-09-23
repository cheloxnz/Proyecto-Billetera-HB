import React, { useEffect } from 'react';
import { Text, ScrollView, View, StyleSheet, Button} from 'react-native';
import Modal from 'react-native-modal';
import { List, Divider } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
import { connect } from 'react-redux';
import { getAllContacts, getAllUsers } from '../actions'
import ModalTransfer from './ModalTransfer'

const ContactsList = ({ contacts, getAllContacts, getAllUsers, onlineUser, navigation }) => {
  const [isModalVisible, setModalVisible] = React.useState(falcse);
  /*useEffect(() => {
  getAllContacts(onlineUser.id)
  },[onlineUser])
  console.log(getAllContacts)*/
  

  return (
    <View style={styles.bg}>
      <Modal isVisible={isModalVisible}>
            <View style={{ flex: 1 }}>
                <Text>Hello!</Text>
                <Button onPress={() => setModalVisible(false)}/>
            </View>
        </Modal>
      
      <View>
 
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
          <List.Item titleStyle={{ fontSize: 20, fontWeight: '700' }}
            left={() =>
              <Text style={{ fontSize: 20, color: 'white' }}> {contacts?.name + ' ' + contacts?.surname} </Text>}
          />
            <Button onPress={() => setModalVisible(true)}/>
        </View>
        <Divider />
      </View>
    </View>

  )
};

const styles = StyleSheet.create({

  bg: {
    backgroundColor: 'red'
  }
})

const mapDispatchToProps = dispatch => {
  return {
    getAllContacts: (id) => dispatch(getAllContacts(id)),
    getAllUsers: () => dispatch(getAllUsers())
  }
}

const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser,
    /*contacts: state.contacts,*/
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);