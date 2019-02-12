import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import firebase from '../Firebase'
import { withNavigation } from 'react-navigation';

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
        const info = {
            name: this.props.name,
            image: this.props.image,
            categories: this.props.categories
        }
        return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CardInfo', {
                    name: this.props.name,
                    image: this.props.image,
                    categories: this.props.categories
                })}>
                    <View style={styles.card} >
                    <Image
                source={{uri: this.state.url }}
                style={styles.image}
                />
                </View>
                </TouchableOpacity>
        )
    }
}

//

const styles = {
    image: {
        width: (Dimensions.get('window').width / 2.04),
        height: 300,
        margin: 2
    },
    card: {
        alignItems: 'center',
    }
}