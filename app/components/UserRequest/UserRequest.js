// Request Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
//import ClientQueue from '../../Views/ClientQueue';


export default class UserRequest extends Component {


  render() {
    return (
    	<View style = {styles.view}>
      <Text style = {styles.request}> Request </Text>
      <View style = {styles.viewButton}>
        <TouchableOpacity /*onPress={() => this.props.nav.navigate('ClientQueueView')}*/>
          <Image style = {styles.turntable}
                 source={require('../../images/vinyl2.png')}
                 resizeMode="contain"
          />
        </TouchableOpacity>
        </View>
     	</View>
    );
  }
}

// const AppNavigator = StackNavigator({
//   ClientQueueView: { screen: ClientQueue}
// });

export const styles = StyleSheet.create({
  view: {
  	flex: 1,
    justifyContent: 'flex-start',
  },
  request: {
    color: '#b22222',
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'transparent',

  },

  viewButton: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },

  turntable: {
        height: 150,
    width: 150,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',

  }
});
