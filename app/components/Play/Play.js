// this is where all the componenet stuff regaurding avatar will go

import React, { Component } from 'react';
import { AppRegistry, Text, Button, View , Image, TouchableOpacity } from 'react-native';
import spotify from "../../native/spotifyModule";
import styles from "./styles";

export default class Play extends Component {
  constructor(props) {
    super(props);
    spotify.launchLogin();
    this.state = {
      currentArtist:"",
      currentSong:""
    };
    this.playSong = this.playSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
  }

  playSong() {
    spotify.startQueue()
    .then(function(result) {
      if(result === "false"){
        spotify.pauseResume();
      }
      let nowPlaying = this.props.songQueue[0];
      this.setState(
        {
          currentArtist:nowPlaying.artistName,
          currentSong:nowPlaying.songName
        }
     );
    }.bind(this))
    .catch(function(e){
      console.warn(e);
    });
  }

  nextSong() {
    spotify.skipToNext()
    .then(function(){
      this.props.songQueue.splice(0,1)
      let nowPlaying = this.props.songQueue[0];
      this.setState(
        {
          currentArtist:nowPlaying.artistName,
          currentSong:nowPlaying.songName
        }
     );
      this.props.nextEvent(this.props.songQueue);
    }.bind(this))
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.playBox}>
          <Text style={styles.names}>{this.state.currentArtist}</Text>
          <View style={styles.song}>
          <Text style={styles.names}>{this.state.currentSong}</Text>
        </View>
          <TouchableOpacity onPress={this.playSong}>
            <Image
              style={styles.play}
              source={this.playing ?
                      require("../../images/pauseButton.png") :
                      require("../../images/playButton.png")
             }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.nextSong}>
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
