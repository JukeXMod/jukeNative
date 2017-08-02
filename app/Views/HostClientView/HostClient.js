import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Button, Dimensions } from 'react-native';
import Host from '../../components/Host/Host.js';
import UserRequest from '../../components/UserRequest/UserRequest.js';
import { StackNavigator } from 'react-navigation';


 

export default class HostClient extends React.Component {

        
  render() {

    return (
        <Image style = {styles.image} source={require('../../images/new.jpg')} resizeMode="cover">
        <View style = {styles.container}>
          <Host nav={this.props.navigation}/>
          <UserRequest style = {styles.userRequest} nav={this.props.navigation}/>
        </View>
        </Image>
    );
  }
}


  
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'transparent',
  },
  image: {
    height: height,
    width: width,
  }

});
