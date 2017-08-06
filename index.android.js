import React, { Component } from 'react';
import App from "./App.js";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class react_native_spotify_ios_sdk_boilerplate extends Component {
  render() {
    return (
        <App />
    );
  }
}

AppRegistry.registerComponent('react_native_spotify_ios_sdk_boilerplate', () => react_native_spotify_ios_sdk_boilerplate);
