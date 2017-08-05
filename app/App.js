import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Play from "./components/Play";
import Login from "./components/Login";


export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={styles.container}>
      <Login />
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
