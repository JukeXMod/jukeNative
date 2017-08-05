import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Toolbar from '../../components/Toolbar/Toolbar.js';
import ClientList from "../ClientQueueList";
import { StackNavigator } from 'react-navigation';

export default class ClientQueue extends React.Component {

  render() {
    return (
      <ClientList />
    );
  }
}

let {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor:'transparent'
  }
});
