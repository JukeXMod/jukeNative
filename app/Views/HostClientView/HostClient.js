import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Button, Dimensions } from 'react-native';
import Host from '../../components/Host/Host.js';
import UserRequest from '../../components/UserRequest/UserRequest.js';
import { StackNavigator } from 'react-navigation';

export default class HostClient extends React.Component {

  static navigationOptions = {
   header:null
 }

  render() {

    return (
      <View style={styles.view}>
      <Image style={styles.jukeboxHero} source={require('../../images/jukeboxHero.png')}/>
          <Host nav={this.props.navigation}/>
          <UserRequest nav={this.props.navigation}/>
      </View>
    );
  }
}
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginRight:400
  // },
  view: {
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1c313a',
      height: height,
  },
  jukeboxHero: {
    bottom: 90,
    width: 300,
    height: 120
  }
});
