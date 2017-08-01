// Spotify Soundcloud Image Buttons Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image } from 'react-native';
import Button from 'react-native-button';


export default class SpotifySoundCloud extends Component {
  render() {
    return (
    	<View>
   			<Button style = {styles.button}><Image style = {styles.soundCloud} source={require('../../images/soundcloud.png')} /></Button>
   			<Button style = {styles.button}><Image style = {styles.spotify} source={require('../../images/spotify.png')} /></Button>


     	</View>
    );
  }
}


export const styles = StyleSheet.create({
  soundCloud: {
  	left: -100,
  	bottom: 175,

  },

spotify: {
	left: -10,
	bottom: 235,
  },
});



