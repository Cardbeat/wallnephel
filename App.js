import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'firebase'
import Loading from './screens/Loading'
import Main from './screens/Main'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Profile from './screens/Profile'

console.disableYellowBox = true;

const AppNavigator = createStackNavigator(
  {
    Main: Main,
    SignUp: SignUp,
    Login: Login,
    Loading: Loading,
    Profile: Profile
  },
  {
    initialRouteName: 'Main'
  }
)

export default createAppContainer(AppNavigator);