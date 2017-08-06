import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
// import SpotifySoundCloud from '../components/SpotifySoundCloud/SpotifySoundCloud.js';
import Toolbar from '../../components/Toolbar/Toolbar.js';
import { StackNavigator } from 'react-navigation';
<<<<<<< HEAD
import Searchbar from '../../components/Searchbar';
import { List, ListItem} from 'react-native-elements';
=======
import { List, ListItem } from 'react-native-elements';
>>>>>>> addingAndriodSpotify

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
<<<<<<< HEAD
=======

>>>>>>> addingAndriodSpotify

export default class ClientQueueList extends React.Component {

  constructor(props){
    super(props);
    let { userName, queueId, songQueue } = this.props.navigation.state.params.data;
    this.nowPlayingUpNext = this.nowPlayingUpNext.bind(this);
    this.state = {
      queuedSongs: songQueue.playlist,
      userName: userName,
      queueId: queueId
    }
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

  render() {
    return (
<<<<<<< HEAD
        <Toolbar style = {styles.toolbar}>

          <View title="QUEUE" style={styles.content}>
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
=======

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
>>>>>>> addingAndriodSpotify
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
<<<<<<< HEAD
  }
});
=======
    
  },
  
>>>>>>> addingAndriodSpotify

// let {width, height} = Dimensions.get('window')
// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     width: width,
//     height: height,
//     backgroundColor:'transparent',
//
//   },
//   image: {
//     height: height,
//     width: width,
//   },
//
//   list: {
//     backgroundColor: 'white',
//     marginTop: 20,
//   },
//   text: {
//     backgroundColor: 'white',
//     marginTop: 20,
//   }
//
//
// });
