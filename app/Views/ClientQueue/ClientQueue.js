import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
// import SpotifySoundCloud from '../components/SpotifySoundCloud/SpotifySoundCloud.js';
import Toolbar from '../../components/Toolbar/Toolbar.js';
import { StackNavigator } from 'react-navigation';
import Searchbar from '../../components/Searchbar';
import { List, ListItem} from 'react-native-elements';

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

export default class ClientQueue extends React.Component {

  render() {
    return (
        <Toolbar style = {styles.toolbar}>

          <View title="QUEUE" style={styles.content}>
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
