import React,{ Component } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import { Header } from 'react-native-elements'


export default class HeaderTab extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text> header </Text>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    header : {
        
    }
})

// using emulator now 
