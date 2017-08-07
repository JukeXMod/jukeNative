import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HostClient from './app/Views/HostClientView';
import ClientQueue from './app/Views/ClientQueue';
import HostQueueView from './app/Views/HostQueueView';
import ClientLoginView from './app/Views/ClientLoginView';
import BackgroundVid from './app/components/Video';

const AppNavigator = StackNavigator({
  HostClientView: { screen: HostClient },
  ClientQueueView: { screen: ClientQueue },
  HostQueueView: { screen: HostQueueView },
  ClientLoginView: { screen: ClientLoginView }
},{initialRouteName:"HostClientView"});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator ref={nav => { this.navigator = nav; }} />
    );
  }
}


