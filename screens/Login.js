import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import * as firebase from 'firebase'
import Main from './Main'
import SignUp from './SignUp'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      authenticating: false,
      user: null,
      error: '',
    }
  }
  static navigationOptions = {
    header: null,
    };


  onPressLogIn() {

      const { email, password } = this.state;

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => 
        this.setState({
        authenticating: false,
        user,
        error: '',
      }))

  }

  componentDidMount() {
      this._loadInitialSate().done()
  }

  _loadInitialSate = async () => {
      let value = await AsyncStorage.getItem('user');
      if(value !== null) {
          this.props.navigation.navigate('Main')
      }
  }

  onPressLogOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          email: '',
          password: '',
          authenticating: false,
          user: null,
        })
      }, error => {
        console.error('Sign Out Error', error);
      });
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return (
        <View style={styles.form}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    if (this.state.user !== null) {
      return (< Main email={this.state.email} user={this.state.user} logout={this.onPressLogOut.bind(this)} />)
    }

    return (
      <View style={styles.form}>
        <Input
          placeholder='Enter your email...'
          label='Email'
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder='Enter your password...'
          label='Password'
          secureTextEntry
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button onPress={() => this.onPressLogIn()}>Log In</Button>
        <Button onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Button>
        <Text>{this.state.error}</Text>
      </View>
    )

  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCurrentState()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  form: {
    flex: 1
  }
});