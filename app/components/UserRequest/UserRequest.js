// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements';

export default class UserRequest extends Component {


  render() {
    return (
    	<View style = {styles.button}>
          <Button large icon={{name:"library-music", size:60}} title="Join Party" onPress={() => this.props.nav.navigate('ClientLoginView')}></Button>
        </View>
    );
  }
}
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  button: {
    width: width
  }
});
