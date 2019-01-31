import React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import firebase from 'firebase'
import Loading from './screens/Loading'
import Main from './screens/Main'
import Login from './screens/Login'
import SignUp from './screens/SignUp'


const AppNavigator = createStackNavigator(
  {
    Main: Main,
    SignUp: SignUp,
    Login: Login,
    Loading: Loading
  },
  {
    initialRouteName: 'Login'
  }
)

export default createAppContainer(AppNavigator);