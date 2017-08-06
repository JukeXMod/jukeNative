// Host Component

import React, { Component } from "react";
import { StyleSheet, AppRegistry, Text, View, Dimensions } from "react-native";
import { StackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements';

export default class Host extends Component {

  render() {
    return (
      <View style={styles.view}>
        <Button stlye={styles.button} large icon={{name:"speaker", size:60, color: 'black'}} title="Host Party" onPress={() => this.props.nav.navigate('HostQueueView')}></Button>
      </View>
    );
  }
}

let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  view: {
    width:width,
    paddingBottom:50,
  },
  button: {
    backgroundColor: 'red',

  }
});
