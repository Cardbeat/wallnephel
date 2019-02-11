import React, {Component} from 'react'
import { StyleSheet, Text,Dimensions, View, FlatList} from 'react-native'
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
        const cards = this.state.data.map( (item, index) => {
            return (
                <Card
                                name={item.data.name}
                                categories={item.data.categories}
                                image={item.data.image}
                                key={item.id}
                            />
            )
        })
        return (
            <View style={styles.container}>
                {cards}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
  });