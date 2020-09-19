import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterFirst,
  RegisterSecond,
  ActiveEmail,
  ForgotPasswordScreen,
  RegisterThird,
  RegisterFourty,
  PositionConsolidated,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterFirst,
    RegisterSecond,
    RegisterThird,
    RegisterFourty,
    ActiveEmail,
    ForgotPasswordScreen,
    PositionConsolidated,
    
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);


export default createAppContainer(Router);
