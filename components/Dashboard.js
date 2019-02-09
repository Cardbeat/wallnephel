import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import firebase from '../Firebase'
import Card from './Card'


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

        let data = this.state.data
        const url = ''
        let cards = data.map((item, index)=> {
            return < Card 
            name={item.data.name} 
            categories={item.data.categories} 
            image={item.data.image} 
            key={index} 
            />
        })
        return (
            <View style={styles.dashboard}>
                {cards}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    dashboard: {

    }
})