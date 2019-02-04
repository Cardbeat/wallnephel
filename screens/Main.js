import React from 'react'
import {StyleSheet, Platform, Image, Text, View, Button } from 'react-native'
import firebase from '../Firebase'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Dashboard from '../components/Dashboard'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null,
      profile: false
    }
  }


  componentWillMount() {
    this.setState({
      currentUser: this.props.user
    })
  }

  renderCurrentState() {
    if(this.state.profile) {
      return (
        < Profile />
      )
    } else {
      return (
        < Dashboard />
      )
    }
  }

render() {
  // this.props.logout
return (
      <View style={styles.container}>
        < Header />
        {this.renderCurrentState()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  
  }
})

// acho que ja da pra iniciar o projeto , a partir do login , não acho que exista solução pros timeouts ,