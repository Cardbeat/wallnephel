import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import the different screens
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Main from './components/Main'

export default class App extends React.Component {
  render() {
    return < AppContainer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// create our app's navigation stack
const MyNavigator = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
)

const AppContainer = createAppContainer(MyNavigator)