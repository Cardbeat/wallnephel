import React,{ Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Header } from 'react-native-elements'
import MenuApp from './MenuApp'


export default class HeaderTab extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Header
                  rightComponent={< MenuApp profile={this.props.profile} />}
                  centerComponent={{ text: 'WALLNEPHEL', style: { color: '#fff' } }}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header : {
    },
    title: {
        fontSize: 30,
        color: 'white',
        marginTop: 40
    }
})

// need the dropdown 
