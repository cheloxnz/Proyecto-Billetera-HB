import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from 'expo-constants';
import SearchB from '../components/SearchB';
import { ImageBackground, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Alert, ScrollView } from 'react-native';
import { getAllContacts, getAllUsers } from '../actions'
import UserAvatar from 'react-native-user-avatar';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';



const ScreenTransfers = ({ navigation, getAllContacts, contacts, onlineUser, getAllUsers }) => {


  useEffect(() => {
  getAllContacts(onlineUser.id)
  },[onlineUser])
  console.log(getAllContacts)
  /*!contacts? onlineUser.id ? getAllContacts(onlineUser.id)*/
  var DATA = []
  contacts ? DATA = contacts : []

  const Item = ({ title }) => (
    <View style={styles.item}>
      <View style={styles.iconFriend}>
        <UserAvatar size={10} name={title} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.name + ' ' + item.surname} />
  );
  return (
    <ImageBackground 
      source={require('../assets/consolidated_dot.png')}
      style={styles.background}>
    <View style={styles.content}>
      <NavBar navigation={navigation} />

      <View style={styles.contenedorPadre}>
        <View style={styles.contenedorCentral}>
          <View style={styles.contenedorUp}>
            <View style={styles.contenedorHave}>
              <Button
                title="Do a transfer"
                type="clear"
                titleStyle={{ color: 'black', fontSize: 18 }}
                containerStyle={{ marginVertical: 10, borderRadius: 10 }}
                onPress={(navigation) => navigation.navigate('InputTransfer')}
              />
            </View>
          </View>
          <View style={styles.contenedorSearch}>
            <Text style={styles.parrafoSearch}>If you have Henry Bank, search for it by username</Text>
            <SearchB />
          </View>
          <View>
            <View>
              <Text style={styles.parrafoContact}>Saved Contacts</Text>
            </View>
            <View>
              <SafeAreaView style={styles.container}>
                <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
                />
              </SafeAreaView>
            </View>
          </View>
        </View>
      </View>
      <FooterNew />
    </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
  contenedorPadre: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  contenedorDeHeader: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'yellow'
  },
  contenedorDeMenu: {
    width: '30%',
    height: '100%',
  },
  contenedorIcono: {
    marginVertical: 14,
    marginHorizontal: 20
  },
  contenedorDeTitulo: {
    width: '34%',
    height: '100%'
  },
  titulo: {
    fontSize: 30,
    marginVertical: 8,
    marginHorizontal: 7
  },
  contenedorDeAcciones: {
    width: '30%',
    height: '100%',
  },
  contenedorIconoD: {
    alignItems: 'flex-end',
    marginVertical: 14,
    marginHorizontal: 20
  },
  contenedorCentral: {
    width: '100%',
    height: '84%',
  },
  contenedorUp: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
  },
  contenedorHave: {
    width: '100%',
    height: '100%',
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: '#E8E8E8'
  },
  contenedorNo: {
    width: '48%',
    height: '100%',
    marginLeft: 15,
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: '#E8E8E8'
  },
  parrafoA: {
    fontSize: 18,
    marginVertical: 20,
    marginHorizontal: 20,
    fontWeight: '700'
  },
  contenedorSearch: {
    width: '100%',
    height: '20%',
  },
  parrafoContact: {
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 10
  },
  parrafoSearch: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 20
  },
  footerPadre: {
    width: '100%',
    height: '10%',
    flex: 3.1,
    justifyContent: 'flex-start'
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'column',
    backgroundColor: 'yellow',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    borderRadius: 10,

  },
  iconFriend: {
    alignSelf: 'flex-start'
  },
  background: {
    flex: 1,
    width: '100%',
  },

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
    contacts: state.contacts,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenTransfers);