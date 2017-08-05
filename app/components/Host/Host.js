// Host Component

import React, { Component } from "react";
import { StyleSheet, AppRegistry, Text, View, Dimensions } from "react-native";
import { StackNavigator } from 'react-navigation';
import HostQueueView from '../../Views/HostQueueView';
import {Button} from 'react-native-elements';

export default class Host extends Component {

  render() {
    return (
      <View style={styles.button}>
        <Button large style title="Host Party" onPress={() => this.props.nav.navigate('HostQueueView')}></Button>
      </View>
    );
  }
}

let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  button: {
    width:width,
    paddingBottom:50
  }
});
