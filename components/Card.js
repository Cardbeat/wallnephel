import React, { Component } from 'react'
import { View, Text, Image, Dimensions} from 'react-native'
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
                <View style={styles.card}>
                    <Image
                source={{uri: this.state.url }}
                style={styles.imge}
                />
                </View>
        )
    }
}

//

const styles = {
    image: {
        width: (Dimensions.get('window').width / 2.04),
        margin: 2,
        height: 300
    },
    card: {
        alignItems: 'center',
    }
}