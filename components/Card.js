import React, { Component } from 'react'
import { View, Text} from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <Text>
                {this.props.name}
            </Text>
        )
    }
}