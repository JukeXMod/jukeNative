// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ClientQueue from '../../Views/ClientQueue';

import {Button} from 'react-native-elements';

export default class UserRequest extends Component {


  render() {
    return (
    	<View style = {styles.button}>
          <Button large title="Join Party" onPress={() => this.props.nav.navigate('ClientQueueView')}></Button>
        </View>
    );
  }
}

const AppNavigator = StackNavigator({
  ClientQueueView: { screen: ClientQueue}
});
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  button: {
    width: width
  }
});
