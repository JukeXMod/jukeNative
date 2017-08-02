import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HostClient from './app/Views/HostClientView';
import ClientQueue from './app/Views/ClientQueue';

const AppNavigator = StackNavigator({
  HostClientView: { screen: HostClient },
  ClientQueueView: { screen: ClientQueue },
  });

export default class App extends React.Component {

static navigationOptions = {
        title: "My Header Title",
        headerTintColor: "blue",
    };

  constructor() {
    super();
  }

  render() {
    return (
        <Image style = {styles.image} source={require('./app/images/new.jpg')} resizeMode="cover">
        <View>
          <Image style = {styles.image} source={require('./app/images/new.jpg')} resizeMode="cover">

          <AppNavigator style = {styles.navigator} ref={nav => { this.navigator = nav; }} />
          </Image>
          <Text> </Text>
        </View>
      </Image>
    );
  }
}

let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  image: {
     flex: 1,
     width: width,
     height: height,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'transparent'
  },
  view: {
    alignItems:'center',
    justifyContent: 'center'
  },
  navigator: {
    width: width,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});
