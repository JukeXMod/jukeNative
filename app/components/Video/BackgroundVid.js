import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, TextInput, VideoControl, Video } from "react-native";

// import Video from "react-native-video";
import LightVideo from "./Turntablevid.mp4";

export default class BackgroundVid extends Component {
// constructor(props) {
//   super(props);
//   this.state = {
//    playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
// //   };
// }
render() {
  return (
    <View>
     <Video
       style={{height: 2.25, width: 4}}
       source={{uri: './Lights.mp4'}}
        />
     <VideoControl
       style={{height: 0.2, width: 4}}
        />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    color: "#FFF",
    backgroundColor: "transparent",
    textAlign: "center"
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#FFF",
    marginVertical: 15,
    paddingLeft: 15
  }
});

