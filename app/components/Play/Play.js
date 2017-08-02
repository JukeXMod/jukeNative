// this is where all the componenet stuff regaurding avatar will go

import React, { Component } from 'react';
import { AppRegistry, Text, Button, View , Image, TouchableOpacity } from 'react-native';
import spotify from "../../native/spotifyModule";
import styles from "./styles";
import ProgressBar from "react-native-progress-bar";

export default class Play extends Component {
  constructor() {
    super();
    spotify.launchLogin();
    this.state = {
      playing: spotify.isPlaying
    };
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.playBox}>
          <Text style={styles.names}>The Beatles</Text>
          <View style={styles.song}>
          <Text style={styles.names}>Let it be</Text>
        </View>
          <TouchableOpacity onPress={spotify.pauseResume}>
            <Image
              style={styles.play}
              source={this.playing ?
                      require("../../images/pauseButton.png") :
                      require("../../images/playButton.png")
             }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={spotify.getNextTrack}>
            <Image
              style={styles.next}
              source={require("../../images/nextButton.png")}
            />
          </TouchableOpacity>
       </View>
     </View>
    );
  }
}
