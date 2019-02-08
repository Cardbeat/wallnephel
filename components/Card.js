import React, { Component } from 'react'
import { View, Text} from 'react-native'

export default class Card extends Component {
    // fazer baixar a imagem pelo nome do storage
    render() {
        return (
            <Text>
                {this.props.name}
            </Text>
        )
    }
}

// deixar bonitinho usando flatList