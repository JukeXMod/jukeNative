// this is where all the componenet stuff regaurding avatar will go

import React, { Component } from 'react';
import { AppRegistry, Text, Button, View} from 'react-native';
import spotify from "../../native/spotifyModule";
import styles from "./styles";
// import ProgressBar from "react-native-progress-bar";

export default class Play extends Component {
  constructor() {
    super();

  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.playBox}>
          <Text style={styles.names}>The Beatles</Text>
          <Text style={styles.names}r>Let it be</Text>
          <View style={styles.pausePlay}>
            <Button title="Pause/Resume" onPress={spotify.pauseResume}/>
          </View>
          <View style={styles.pausePlay}>
          <Button title="Play" onPress={spotify.playUri}/>
        </View>
        </View>
       </View>
    );
  }
}
