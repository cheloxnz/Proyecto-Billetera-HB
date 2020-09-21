import React, { useEffect } from 'react';
import { Text, ScrollView, View, StyleSheet} from 'react-native';
import { List, Divider } from 'react-native-paper';
import UserAvatar from 'react-native-user-avatar';
import { connect } from 'react-redux';
import { getAllContacts, getAllUsers } from '../actions'

const ContactsList = ({contacts, getAllContacts, getAllUsers, onlineUser}) =>  { 
  
  /*useEffect(() => {
  getAllContacts(onlineUser.id)
  },[onlineUser])
  console.log(getAllContacts)*/

 if (contacts.length > 0){
  return  (
    <View>
    <ScrollView>
      <List.Section>
        <List.Subheader style={{fontSize: 25, marginHorizontal: -15 }}>
          Your contacts:
        </List.Subheader>
        <View>
          {contacts.map((c) => {
                    <View>
                  <View style={styles.iconFriend}>
                    <UserAvatar size={10} />
                  </View>
                  <View style={{ flexDirection:'row', justifyContent:'space-between' }} >
                    <List.Item titleStyle = {{ fontSize: 20, fontWeight: '700' }}
                    left = {() => 
                      <Text style = {{ fontSize: 20 }}> {c.name + c.surname} </Text> }
                    />
                  <Text style = {{ fontSize: 16, marginTop: 10, marginRight: 30 }}>
                    $500 - 15/09
                  </Text>
                  </View>      
                  <Divider/>
                  </View> 
                  })}
          </View>
        </List.Section>
    </ScrollView>
    </View>
)


 } else {
  return null
 }
  };

const styles = StyleSheet.create({

  iconFriend: {
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
export default connect(mapStateToProps,mapDispatchToProps)(ContactsList);