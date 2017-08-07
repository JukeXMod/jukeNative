import React from 'react';
import { StyleSheet, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Host from '../../components/Host/Host.js';
import UserRequest from '../../components/UserRequest/UserRequest.js';
import { StackNavigator } from 'react-navigation';
import { FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements'

export default class ClientLoginView extends React.Component {

  static navigationOptions = {
    title: 'Join',
  }

  render() {
    return (
      <View style={styles.view}>
        <FormLabel><Text style={styles.text} h4>Name</Text></FormLabel>
        <FormInput />
        <FormValidationMessage>
          {'Required*'}
        </FormValidationMessage>
        <FormLabel><Text style={styles.text} h4>Queue Id</Text></FormLabel>
        <FormInput keyboardType={'numeric'}  />
        <FormValidationMessage>
          {'Required*'}
        </FormValidationMessage>
        <Button buttonStyle={styles.buttonTest} large title="Join" onPress={() => this.props.navigation.navigate("ClientQueueView")}></Button>
      </View>
    );
  }
}
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  view: {
  backgroundColor: '#1c313a',
  height: height,
  },
  buttonTest: {
      marginTop: 150,  //This is causing white space on the screen
  },
  text:{
  color: '#bdbdbd',
},
});
