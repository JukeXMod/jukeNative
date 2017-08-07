// this is where all the componenet stuff regaurding avatar will go

import React, { Component } from 'react';
import { AppRegistry, Text, Button, View , Image, TouchableOpacity } from 'react-native';
import spotify from "../../native/spotifyModule";
import styles from "./styles";

export default class Play extends Component {
  constructor(props) {
    super(props);
    spotify.launchLogin();
    this.playSong = this.playSong.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.state = {
      nextButton: this.props.songQueue.length < 0 ?  true : false
    }
  }
  playSong(nextSong=false) {
    spotify.isPlaying()
    .then(function(result) {
      if(!result.isPlaying && result.postionMS <=0 || nextSong) {
          if(this.props.songQueue.length > 0) {
            let track = this.props.songQueue.splice(0,1);
            spotify.playUri(track[0].trackUri);
          }
      }
      else {
        spotify.pauseResume();
      }
    }.bind(this))
    .catch(function(e){
      console.warn(e);
    })
  }
  pauseResumeSong(){

  }
  nextSong() {
     this.props.nextEvent();
     if(this.props.songQueue.length <= 0) {
       this.setState({nextButton:true});
       spotify.pauseResume();

     }
     this.playSong(true)
  }
  render() {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.playBox}>
          <Text style={styles.names}>The Beatles</Text>
          <View style={styles.song}>
          <Text style={styles.names}>Let it be</Text>
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
          <TouchableOpacity disabled={this.state.nextButton} onPress={this.nextSong}>
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
