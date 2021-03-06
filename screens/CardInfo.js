import React, { Component } from 'react'
import { View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import firebase from '../Firebase'
import { withNavigation } from 'react-navigation'
import { ButtonGroup , Button, Icon} from 'react-native-elements'
import RNWalle from "react-native-walle";

class CardInfo extends Component {
    constructor(props) {
        super()
        this.state={
            url: ''
        }
        this.updateIndex = this.updateIndex.bind(this)
    }


    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }

    componentWillMount() {
        const info = this.props.navigation.getParam('image')
        let image = this.props.navigation.getParam('image')
            firebase.storage().ref().child(`images/${image}`).getDownloadURL().then( url => {
                this.setState({
                    url: url
                })
                console.log(url)
            })
    }

    setWall() {
        

    }

    render() {
        const component1 = () => <Icon name='smartphone' onPress={this.setWall.bind(this)}/>
        const component2 = () => <Icon name='star' />
        const buttons = [{ element: component1 }, { element: component2 }]
        return (
                <View style={styles.card} >
                    <Image
                source={{uri: this.state.url }}
                style={styles.image}
                />
                    <View style={styles.buttons}>
                    <ButtonGroup
      buttons={buttons}
      containerStyle={{height: 50}} />
                    </View>
                </View>
        )
    }
}

//

const styles = {
    image: {
        width: (Dimensions.get('window').width),
        height: (Dimensions.get('window').height - 80)
    },
    buttons: {
      flex: 1,
      justifyContent: 'flex-end',
      width: (Dimensions.get('window').width)
    },
    card: {
        flex: 1
    }
}


export default CardInfo