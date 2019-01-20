import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View, 
  TouchableOpacity,
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';
 
const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
        <Text style={{ color: 'white', }}>Wallnephel</Text>
      </TouchableOpacity>
    </View>
  );
};

const ComponentRight = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-end', }}>
      <TouchableOpacity>
        <Text style={{ color: 'white', }}> menu</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default class NavBar extends Component {
  render() {
    return (
      <View style={{marginTop: 20}} >
        <NavigationBar 
          componentLeft     = { () =>  <ComponentLeft />   }
          componentRight    = { () =>  <ComponentRight />  }
        />
      </View>
    );
  }
}