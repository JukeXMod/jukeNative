// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ClientQueue from '../../Views/ClientQueue';


export default class UserRequest extends Component {


  render() {
    return (
    	<View style = {styles.view}>
      <Text style = {styles.request}> Request </Text>
      <View style = {styles.viewButton}>
        <TouchableOpacity style = {styles.turntable} onPress={() => this.props.nav.navigate('ClientQueueView')}>
          <Image style = {styles.turntable}
                 source={require('../../images/red.png')}
                 resizeMode="contain"
          />
        </TouchableOpacity>
        </View>
     	</View>
    );
  }
}

const AppNavigator = StackNavigator({
  ClientQueueView: { screen: ClientQueue}
});
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  view: {
  	flex: 1,
    justifyContent: 'flex-start',
    width: width,
    height: height,
  },
  request: {
    color: '#ff0000',
    fontSize: 70,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    textAlign: 'center',
    bottom: 30,

  },

  viewButton: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },

  turntable: {
    height: 150,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',

  }
});
