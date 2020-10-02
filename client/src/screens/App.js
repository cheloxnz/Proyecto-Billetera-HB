import * as React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { getAccount } from '../actions';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './Principal';
import ScreenTransfers from './ScreenTransfers';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import ScreenMyCard from './ScreenMyCard';
import ScreenPayments from './ScreenPayments';
import BuyaSell from './BuyaSell';
import InputTransfer from './InputTransfer';
import HomeScreen from './HomeScreen';
import ScreenLoad from './ScreenLoad';
import ScreenFriend from './ScreenFriend';
import ScreenConfirmAmount from './ScreenConfirmAmount';
import ScreenDates from './ScreenDates';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Estadisticas from './Estadisticas';
import InputPayment from './InputPayment';
import Axios from 'axios';

const Drawer = createDrawerNavigator();



const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: getStatusBarHeight(),

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
          borderLeftWidth: 2,
          backgroundColor: 'black',
        }}
      >
        <Drawer.Screen name="Home" component={Principal}
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
        <Drawer.Screen name="My Dates" component={ScreenDates}
          options={{
            title: 'My Dates',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='user-circle'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="InputTransfer" component={InputTransfer}
          options={{
            title: 'Transactions',
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
            title: 'Forgot Password',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='key'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
        <Drawer.Screen name="Add Friend" component={ScreenFriend}
          options={{
            title: 'Add Friend',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='users'
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
          style={{ display: 'hidden' }}
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
        <Drawer.Screen name="Confirm" component={ScreenConfirmAmount}
          options={{
            title: 'Confirm',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='check-circle'
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
        <Drawer.Screen name="Estadisticas" component={Estadisticas}
          options={{
            title: 'My Statistics',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='calculator'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            )
          }} />
        
          <Drawer.Screen name="Input Payment" component={InputPayment}
          options={{
            title: 'Services',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='dollar'
                size={20}
                color={focused ? 'black' : '#ccc'}
              />
            ),
          }} />
           <Drawer.Screen name= 'HomeScreen' component={HomeScreen}
           
          options={{
            title: '.',
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name='dollar'
                size={20}
                color='black'
              />
            ),
          }} />
          
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
