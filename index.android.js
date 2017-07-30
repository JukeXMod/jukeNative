/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import App from "./app/App.js";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import SomeTaskName from './native/backGroundTest';
// AppRegistry.registerHeadlessTask('SomeTaskName', () => SomeTaskName);

export default class react_native_spotify_ios_sdk_boilerplate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <App />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('react_native_spotify_ios_sdk_boilerplate', () => react_native_spotify_ios_sdk_boilerplate);
