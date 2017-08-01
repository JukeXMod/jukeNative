// Host Component

import React, { Component } from "react";
import { StyleSheet, AppRegistry, Text, View, Image, TouchableOpacity } from "react-native";
// import Button from "react-native-button";


export default class Host extends Component {
  render() {
    return (
    	<View style = {styles.view}>
      <Text style = {styles.host}> Host </Text>
      <View style = {styles.viewButton}>
        <TouchableOpacity>
          <Image style={styles.jukebox}
            resizeMode="stretch"                                source={require('../../images/jukebox1.png')} />
        </TouchableOpacity>
      </View>

     	</View>
    );
  }
}

export const styles = StyleSheet.create({
  view: {
  	flex: 1,
    justifyContent: 'flex-start',
  },

  host: {
    color: '#b22222',
    fontSize: 50,
    fontWeight: 'bold',
    alignItems: 'center',
    backgroundColor: 'transparent',

  },

  viewButton: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',

  },

  jukebox: {
    height: 150,
    width: 150,
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'space-between',



  }
});
