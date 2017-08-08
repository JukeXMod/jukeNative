import React from 'react';
import { StyleSheet, Text, AppRegistry, AsyncStorage, View, Image, TouchableOpacity, FlatList, Button, Dimensions } from 'react-native';
import Host from '../../components/Host/Host.js';
import UserRequest from '../../components/UserRequest/UserRequest.js';
import { StackNavigator } from 'react-navigation';
import appKeyStore from "../../config/storeKeys.js"

export default class HostClient extends React.Component {
  constructor(){
    super();
    this.setHasOpenedHost = this.setHasOpenedHost.bind(this);
    this.setHasOpenedHost();
  }
  static navigationOptions = {
   header:null
 }
  setHasOpenedHost() {
    appKeyStore.saveKey("hostViewInit","true")
    .catch(function(error) {
      console.warn(error);
    });
  }

  render() {

    return (
      <View style={styles.view}>
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
  }
});
