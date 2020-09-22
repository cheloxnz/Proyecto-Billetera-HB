import * as React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { getAccount } from '../actions';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from '../components/NavBar';
import Principal from './Principal';
import FooterNew from '../components/FooterNew';
import ScreenTransfers from './ScreenTransfers';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ScreenMyCard from './ScreenMyCard';
import ScreenPayments from './ScreenPayments';
import BuyaSell from './BuyaSell';
import InputTransfer from './InputTransfer';
import HomeScreen from './HomeScreen';
import ScreenLoad from './ScreenLoad';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();


const PositionConsolidated = ({ navigation }) => {

  return (
    <View style={styles.container}>
      {/* NAVBAR VA EN TODOS LOS SCREEN  */}
      <NavBar navigation={navigation} />
      <ImageBackground
        source={require('../assets/consolidated_dot.png')}
        style={styles.background}
      >
        {/* ACA SE PONE EL COMPONENTE DEL SCREEN A RENDERIZAR */}
        <Principal navigation={navigation} />

      </ImageBackground>


      {/* FOOTER VA EN TODOS LOS SCREEN  */}
      <FooterNew navigation={navigation} />
    </View>

  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: getStatusBarHeight(),
    justifyContent: 'space-between'

  },
  component: {
    flex: 1
  },

  background: {
    flex: 1,
    width: '100%',
  },
})


const mapStateToProps = state => {
  return {
    account: state.account,
    onlineUser: state.onlineUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAccount: (id) => dispatch(getAccount(id))
  }
}





function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          activeTintColor: 'black',
          activeBackgroundColor: 'yellow',
          inactiveTintColor: 'gray'
        }}
        drawerStyle={{
          borderColor: 'yellow',
          borderWidth: 2,
          marginTop: '13%',
          backgroundColor: 'white',
        }}
      >
        <Drawer.Screen name="Home" component={PositionConsolidated}
          options={{
            title: 'Home',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='home'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />

        <Drawer.Screen name="InputTransfer" component={InputTransfer}
          options={{
            title: 'InputTransfer',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='dollar'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="BanelcoKeys" component={ForgotPasswordScreen}
          options={{
            title: 'Banelco Keys',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='key'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Transfers" component={ScreenTransfers}
          options={{
            title: 'Transfers',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='random'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Load" component={ScreenLoad}
          options={{
            title: 'Load',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='plus'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Payments" component={ScreenPayments}
          options={{
            title: 'Payments',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='tags'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Card" component={ScreenMyCard}
          options={{
            title: 'My Card',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='credit-card'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name='BuyBitCoins' component={BuyaSell}
          options={{
            title: 'Buy and Sell BitCoins',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='bitcoin'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
