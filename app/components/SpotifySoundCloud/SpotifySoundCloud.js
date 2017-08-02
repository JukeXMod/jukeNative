// Spotify Soundcloud Image Buttons Component
import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, TouchableOpacity } from 'react-native';

export default class SpotifySoundCloud extends Component {
  render() {
    return (
    	<View>
        <TouchableOpacity style={styles.button}>
          <Image style = {styles.soundCloud}
                 source={require('../../images/soundcloud.png')}
           />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image style = {styles.spotify}
                 source={require('../../images/spotify.png')}rr
           />
        </TouchableOpacity>
     	</View>
    );
  }
}


export const styles = StyleSheet.create({
  soundCloud: {
  	// left: -100,
  	// bottom: 175,

  },

spotify: {
	// left: -10,
	// bottom: 235,
  },
});
