import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import spotify from "./native/spotifyModule";

export default class App extends React.Component {
  constructor() {
    super();
    spotify.launchAuth();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Button title="Play"
                 onPress={spotify.onPlayButtonClicked}/>
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
