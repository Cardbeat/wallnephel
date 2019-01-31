import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from '../Firebase'

export default class Main extends React.Component {
  state = { currentUser: null }




render() {
return (
      <View style={styles.container}>
        <Text>
          Hi! 
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})