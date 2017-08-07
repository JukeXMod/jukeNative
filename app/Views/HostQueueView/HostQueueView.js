import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
// import SpotifySoundCloud from '../components/SpotifySoundCloud/SpotifySoundCloud.js';
import Toolbar from '../../components/Toolbar/Toolbar.js';
import { StackNavigator } from 'react-navigation';
import Searchbar from '../../components/Searchbar';
import Play from '../../components/Play';
import { List, ListItem} from 'react-native-elements';
import db from "../../../api/dataBaseApi.js";

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default class HostQueueView extends React.Component {

  constructor(props){
    super(props);
    this.nowPlayingUpNext = this.nowPlayingUpNext.bind(this);
    this.getQueue = this.getQueue.bind(this);
    this.nextSongInQueue = this.nextSongInQueue.bind(this);
    this.state = {
      queuedSongs: [],
      userName: "",
      queueId: -1
    }
    this.getQueue(2) // will need to remove hardcode atm
  }
  getQueue(queueId) {
    db.getSongs(queueId)
    .then(function(result) {
      this.setState({queuedSongs: result.data.playlist});
    }.bind(this))
    .catch(function(e) {
      console.warn(e);
    });
  }

  nowPlayingUpNext(index){
    if(index >1) return
    if(index === 0) {
      return "Now Playing"
    }
    else if (index === 1) {
      return "Up Next"
    }
  }

  nextSongInQueue() {
    if(this.state.queuedSongs.length >= 0) {
      let queue = this.state.queuedSongs;
      this.setState({queuedSongs:queue});
    }
  }

  render() {
    return (
        <Toolbar style = {styles.toolbar}>

          <View title="QUEUE" style={styles.content}>
            <Play songQueue= {this.state.queuedSongs} nextEvent={this.nextSongInQueue} />
            <List containerStyle={{marginBottom: 30}}>
            {
              this.state.queuedSongs.map((l, i) => (
                <ListItem
                  hideChevron = {true}
                  roundAvatar
                  avatar={{uri:l.artistPic}}
                  key={i}
                  title={l.artistName}
                  subtitle={l.songName}
                  rightTitle = {this.nowPlayingUpNext(i)}
                />
              ))
            }
            </List>
          </View>

          <View title="ADD SONG" style={styles.content}>
            <Searchbar />
            <List containerStyle={{marginBottom: 30}}>
            {
              list.map((l, i) => (
                <ListItem
                  roundAvatar
                  avatar={{uri:l.avatar_url}}
                  key={i}
                  title={l.name}
                />
              ))
            }
            </List>
          </View>
        </Toolbar>
    );
  }
}

let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor:'transparent',
  }
});
