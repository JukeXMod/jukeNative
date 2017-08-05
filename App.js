import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HostClient from './app/Views/HostClientView';
import ClientQueue from './app/Views/ClientQueue';
import HostQueueView from './app/Views/HostQueueView';

const AppNavigator = StackNavigator({
  HostClientView: { screen: HostClient },
  ClientQueueView: { screen: ClientQueue },
  HostQueueView: { screen: HostQueueView }
},{initialRouteName:"HostClientView"});



export default class App extends React.Component {
  render() {
    return (
      <AppNavigator style = {styles.navigator} ref={nav => { this.navigator = nav; }} />
    );
  }
}
