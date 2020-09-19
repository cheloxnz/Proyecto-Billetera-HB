import * as React from 'react';
import { connect } from 'react-redux';
import { ImageBackground, StyleSheet, Text, View, ScrollView, Alert, TouchableOpacity, Button } from 'react-native';

import { getAccount } from '../actions';
import { getStatusBarHeight } from 'react-native-status-bar-height';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import NavBar from '../components/NavBar';
import Principal from './Principal'
import FooterNew from '../components/FooterNew';
import ScreenTransfers from './ScreenTransfers';
import Mycard from './ScreenMyCard';
import Payments from './ScreenPayments';

const Drawer = createDrawerNavigator();


const PositionConsolidated = ({navigation}) => {
    
    return (
            <View style={styles.container}>
                {/* NAVBAR VA EN TODOS LOS SCREEN  */}              
                  <NavBar navigation={navigation}/>                
                  <ImageBackground
                    source={require('../assets/consolidated_dot.png')}
                    style={styles.background}
                  >
                {/* ACA SE PONE EL COMPONENTE DEL SCREEN A RENDERIZAR */}  
                      <Principal navigation={navigation}/>
                      
                  </ImageBackground> 


                 {/* FOOTER VA EN TODOS LOS SCREEN  */}   
                  <FooterNew navigation={navigation}/>
            </View>  
      
    )
}




const styles = StyleSheet.create({
    container: {
        flex:1,
        top: getStatusBarHeight(),
        justifyContent:'space-between'
        
    },
    component:{
      flex:1
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
        activeBackgroundColor:'yellow', 
        inactiveTintColor:'gray'      

      }}
      drawerStyle={{
        borderColor:'yellow',
        borderWidth:2,
        marginTop:'15%',
        backgroundColor:'white',
        
      }}
      >
        <Drawer.Screen name="Home" component={PositionConsolidated} />
        <Drawer.Screen name="Transfers" component={ScreenTransfers} />
        <Drawer.Screen name="Mycard" component={Mycard} />
        <Drawer.Screen name="Payments" component={Payments} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

