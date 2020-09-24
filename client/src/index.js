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
  BuyaSell,
  InputTransfer,
  ScreenLoad,
  ScreenFriend
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
    BuyaSell,
    InputTransfer,
    ScreenLoad,
    ScreenFriend
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);


export default createAppContainer(Router);
