import React, { Component } from 'react'
import { ScrollView, Text, Image} from 'react-native'
import firebase from '../Firebase'

export default class Card extends Component {
    constructor(props) {
        super()
        this.state={
            url: ''
        }
    }
    componentWillMount() {
        let image = this.props.image
            firebase.storage().ref().child(`images/${image}`).getDownloadURL().then( url => {
                this.setState({
                    url: url
                })
            })
    }

    render() {

        return (
            <ScrollView>
                <Image
                source={{uri: this.state.url }}
                style={{ height: 300, width: 200 }}
                />

            </ScrollView>
        )
    }
}