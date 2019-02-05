import React, { Component } from 'react'
import {Text, View} from 'react-native'
import { Icon } from 'react-native-elements'

export default class Menu extends Component {
    render() {
        return (
            <Icon name="menu" color="white" onPress={() => {console.log('pressed')}}/>
        )
    }
}