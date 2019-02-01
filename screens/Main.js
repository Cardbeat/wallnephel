import React from 'react'
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from '../Firebase'

export default class Main extends React.Component {
  state = { currentUser: null }


  componentWillMount() {
    this.setState({
      currentUser: this.props.user
    })
  }

render() {
return (
      <View style={styles.container}>
        <Text>
          Hi! 
        </Text>
        <Button onPress={this.props.logout } title="log out" />
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

// acho que ja da pra iniciar o projeto , a partir do login , não acho que exista solução pros timeouts ,