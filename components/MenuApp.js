import React, { Component } from 'react'
import {Text, View, Button, ToolbarAndroid} from 'react-native'
import { Icon, List, ListItem } from 'react-native-elements'

export default class MenuApp extends Component {
    constructor(props) {
        super(props) 
        this.state ={
            settings: false
        }
    }

    currentRender() {
        if(!this.state.settings) {
            return (
                <Icon name='menu' color='white' onPress={this.changeSettings.bind(this)}  />
            )
        } else {
            return (
                <Text onPress={this.props.profile}>Settings</Text>
            )
        }
    }

    changeSettings() {
        this.setState({
            settings: true
        })
    }

    render() {
        return (
            <View>
                {this.currentRender()}
            </View>
        )
    }
}