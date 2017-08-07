import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
// import SpotifySoundCloud from '../components/SpotifySoundCloud/SpotifySoundCloud.js';
import Toolbar from '../../components/Toolbar/Toolbar.js';
import { StackNavigator, List, ListItem } from 'react-navigation';
import Searchbar from '../../components/Searchbar';
import Play from '../../components/Play';


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
];

export default class HostQueueView extends React.Component {

 
  render() {
    return (
        

        <View style = {styles.container}>
        <Toolbar style = {styles.toolbar}>

          <Text title="QUEUE" style={styles.content}> </Text>
          


            
        <Play style ={styles.play} />

          <View title="Completed" style={styles.content}>
          
          </View>

        </Toolbar>
        </View>
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
    backgroundColor: '#1c313a'
,

  },
  image: {
    height: height,
    width: width,
  },

  list: {
    marginTop: 20,
    backgroundColor:'#bdbdbd',

  },
  text: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  toolbar:{
    backgroundColor:'transparent'
  },
  play:{
    top: 150,
  },
  content: {
    width: width,
  },
});
