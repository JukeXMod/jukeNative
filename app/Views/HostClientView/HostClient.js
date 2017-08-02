import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Button } from 'react-native';
import Host from '../../components/Host/Host.js';
import UserRequest from '../../components/UserRequest/UserRequest.js';
import { StackNavigator } from 'react-navigation';
import ClientQueue from '../ClientQueue';


 

export default class HostClient extends React.Component {

        
  render() {

    return (

        <View style = {styles.container}>
          <Host nav={this.props.navigation}/>
          <UserRequest style = {styles.userRequest} nav={this.props.navigation}/>
        </View>
    );
  }
}
const AppNavigator = StackNavigator({
  ClientQueueView: { screen: ClientQueue}
});

  

export const styles = StyleSheet.create({
  container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'transparent',

  },

});
