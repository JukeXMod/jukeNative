// Host Component

import React, { Component } from "react";
import { StyleSheet, AppRegistry, Text, View, Image, TouchableOpacity, Dimensions } from "react-native";
// import Button from "react-native-button";


export default class Host extends Component {
  render() {
    return (

    	<View style = {styles.view}>
      <Text style = {styles.host}> Host </Text>
      <View style = {styles.viewButton}>
        <TouchableOpacity style={styles.jukebox}>
          <Image style={styles.jukebox}
            resizeMode="stretch"
            source={require('../../images/jukebox1.png')} />
        </TouchableOpacity>
      </View>

     	</View>
    );
  }
}
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  view: {
  	flex: 1,
    justifyContent: 'flex-start',

  },

  host: {
    color: '#ff0000',
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 10,


  },


  jukebox: {
    height: 200,
    width: 230,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',



  }
});
