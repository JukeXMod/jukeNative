import React from 'react';
import { StyleSheet, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import Host from "../../components/Host/Host.js";
import UserRequest from "../../components/UserRequest/UserRequest.js";
import { StackNavigator } from "react-navigation";
import { FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements'

export default class ClientLoginView extends React.Component {
  constructor(){
    super();
    this.checkLogin = this.checkLogin.bind(this);
    this.NameInput = this.NameInput.bind(this);
    this.queueInput = this.queueInput.bind(this);
    this.state = {
      userName: "",
      queueId: -1
    }
  }
  static navigationOptions = {
    title: 'Join',
  }

  checkLogin(queueId) {

  }
  NameInput(event) {
   this.setState({userName: event.target.value});
  }
  queueInput(event){
   this.setState({queueId: event.target.value});
  }
  render() {
    return (
      <View>
        <FormLabel><Text h4>Name</Text></FormLabel>
        <FormInput />
        <FormValidationMessage>
          {'This field is required'}
        </FormValidationMessage>
        <FormLabel><Text h4>Queue Id</Text></FormLabel>
        <FormInput keyboardType={'numeric'}  />
        <FormValidationMessage>
          {'This field is required'}
        </FormValidationMessage>
        <Button buttonStyle={styles.buttonTest} large backgroundColor="#03A9F4" title="Join" onPress={() => this.props.navigation.navigate("ClientQueueView")}></Button>
      </View>
    );
  }
}

export const styles = StyleSheet.create({

  buttonTest: {
      marginTop: 50
  }
});
