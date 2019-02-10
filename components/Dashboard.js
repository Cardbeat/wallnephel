import React, {Component} from 'react'
import { StyleSheet, Text,Dimensions, View, FlatList} from 'react-native'
import firebase from '../Firebase'
import Card from './Card'
const {width} = Dimensions.get('window');

const numberGrid = 3;

const itemWidth = width / numberGrid;

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
            <View style={styles.container}>
                <FlatList 
                data={this.state.data}
                keyExtractor={item => item.id}
                renderItem={ (item) => {
                    console.log(item.item.data)
                    return (
                        <View style={styles.item}>
                            <Card
                                name={item.item.data.name}
                                categories={item.item.data.categories}
                                image={item.item.data.image}
                                key={item.item.id}
                                numColumns={2}
                            />
                        </View>
                    )
                }}
            />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemImage:{
      width: itemWidth,
      height: itemWidth
    }
  });