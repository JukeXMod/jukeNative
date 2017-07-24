import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from "./native/spotifyPlay";

export default class App extends React.Component {
  constructor() {
    super();
    this.hello = this.hello.bind(this);
    this.hello();
  }
  /*
    * This is just to prove concept
   */
  async hello() {
    try {
      let hello = await Auth.hello();
      console.warn(hello);
    } catch (e) {
      console.error(e);
  }
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
