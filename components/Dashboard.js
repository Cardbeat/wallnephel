import React, {Component} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'



export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.dashboard}>
                <Text>this is dashboard</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    dashboard: {
        position: 'absolute',
        top: 0
    }
})