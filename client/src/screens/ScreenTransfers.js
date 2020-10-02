import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Constants from 'expo-constants';
import ContactsList from '../components/ContactsList';
import { ImageBackground, View, StyleSheet, Text, StatusBar, TouchableOpacity} from 'react-native';
import { friendCVU, getAllContacts } from '../actions';
import { SearchBar } from 'react-native-elements';
import NavBar from '../components/NavBar';
import FooterNew from '../components/FooterNew';
import { ScrollView } from 'react-native-gesture-handler';



const ScreenTransfers = ({ navigation, getAllContacts, account, contacts, onlineUser, friendCVU, }) => {
  const [data, setData] = React.useState([])
  const [input, setInput] = React.useState('')

  useEffect(() => {
    getAllContacts(onlineUser.id)
  }, [onlineUser])

  const handleContacts = text => {
    setInput(text)
    setData(contacts.filter((contact) => {
      return contact.name.toLowerCase().indexOf(text.toLowerCase()) !== -1 || contact.surname.toLowerCase().indexOf(text.toLowerCase()) !== -1
    }))
  }


  return (
    <View style={styles.contenedorPrincipal}>
      <NavBar navigation={navigation} />
      <ImageBackground
        source={require('../assets/consolidated_dot.png')}
        style={styles.background}>
        <View style={styles.content}>

          <View style={styles.contenedorPadre}>
            <View style={styles.contenedorCentral}>

              <View style={styles.contenedorSearch}>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, textAlign: 'center', marginBottom: 10 }}>My CVU: {<Text style={{ color: 'yellow' }}>{account?.CVU}</Text>}</Text>
                <Text style={{ color: 'white', fontWeight: '700', fontSize: 20, textAlign: 'center', marginBottom: 10 }}>If you have Henry Bank, search for it by username</Text>
                <SearchBar
                  onChangeText={text => { handleContacts(text) }}
                  value={input}
                  inputStyle={{ backgroundColor: 'white' }}
                  containerStyle={{ backgroundColor: 'black', borderWidth: 1, borderRadius: 8 }}
                  ForwardRef={'#g5g5g5'}
                  placeholder={'Type Here...'}
                />
              </View>
              <View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.parrafoContact}>My contacts</Text>
                </View>
                <View >
                <ScrollView>
                  {data.length >= 1 ? data.map((contacts, i) => <ContactsList contacts={contacts} navigation={navigation} key={i} />) : contacts?.map((contacts, i) => <ContactsList contacts={contacts} navigation={navigation} key={i} />)}
                </ScrollView>
                </View>
              </View>
              <View style={styles.contenedorHave}>
                <TouchableOpacity
                  style={{ marginVertical: 20, backgroundColor: '#00296B', width: '35%', height: '14%' }}
                  onPress={() => navigation.navigate('Add Friend')}
                >
                  <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginTop: 14 }}>
                    Add a friend
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ color: 'white', fontSize: 18, marginVertical: 20, backgroundColor: '#00296B', width: '35%', height: '14%' }}
                  onPress={() => navigation.navigate('InputTransfer')}
                >
                  <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', marginTop: 14 }}>
                    Do a transfers
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
      <FooterNew navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorPrincipal: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
  content: {
    width: "100%",
    height: "100%",
    paddingTop: Constants.statusBarHeight,
  },
  background: {
    flex: 1,
    width: '100%',
  },
  contenedorPadre: {
    width: '100%',
    height: '100%',
    flex: 1,
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
  contenedorHave: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '70%',
    borderRadius: 10,
    marginTop: 250,
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
    //height: '40%',

  },
  parrafoContact: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: 'yellow',
    width: '70%',
    position: 'relative',
    right: 31,
    textAlign: 'left'
  },
  parrafoSearch: {
    color: 'white',
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

})


const mapDispatchToProps = dispatch => {
  return {
    getAllContacts: (id) => dispatch(getAllContacts(id)),
    getAllUsers: () => dispatch(getAllUsers()),
    friendCVU: (cvu) => dispatch(friendCVU(cvu)),
  }
}

const mapStateToProps = state => {
  return {
    onlineUser: state.onlineUser,
    contacts: state.contacts,
    account: state.account
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenTransfers);


