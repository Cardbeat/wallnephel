import React,{ Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { Button, Header } from 'react-native-elements'
import Menu from '../components/Menu'


export default class HeaderTab extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Header
                  rightComponent={< Menu />}
                  leftComponent={{ text: 'Wallnephel', style: { color: '#fff' } }}
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

// using emulator now 
