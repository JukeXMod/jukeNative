import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import auth from "./native/spotifyModule";

export default class App extends React.Component {
  constructor() {
    super();
    auth.hello();
    auth.launchAuth();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
