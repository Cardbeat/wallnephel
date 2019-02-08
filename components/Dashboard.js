import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import firebase from '../Firebase'


export default class Dashboard extends Component {
    constructor(props) {
        super()
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        const db = firebase.firestore();
        const posts = db.collection('posts')
        posts.get().then( snapshot => {
            snapshot.forEach( doc => {
                this.setState({
                    data: [...this.state.data, {id: doc.id, data: doc.data() }]
                })
            })
        })
    }



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

    }
})