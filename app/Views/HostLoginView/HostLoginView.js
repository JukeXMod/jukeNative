import React from 'react';
import { StyleSheet, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import UserRequest from "../../components/UserRequest/UserRequest.js";
import { StackNavigator } from "react-navigation";
import { FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements';
import db from "../../../api/dataBaseApi.js";

export default class ClientLoginView extends React.Component {
  constructor(){
    super();
    this.checkLogin = this.checkLogin.bind(this);
    this.partyName = this.partyName.bind(this);
    this.state = {
      partyName: "",
      queueId: -1
    }
  }
  static navigationOptions = {
    title: 'Join',
  }

  checkLogin(queueId) {
    if(this.state.partyName.length > 0) {
      this.props.navigation.navigate("HostQueueView", {
        data:{ partyName:this.state.partyName }
      });
    }
  }

  partyName(text) {
   this.setState({partyName: text});
  }
  render() {
    return (
      <View>
        <FormLabel><Text h4>Queue Code</Text></FormLabel>
        <FormLabel><Text h4>Party Name</Text></FormLabel>
        <FormInput onChangeText={this.partyName} />
        <FormValidationMessage>
          {'This field is required'}
        </FormValidationMessage>
        <Button buttonStyle={styles.buttonTest} large backgroundColor="#03A9F4" title="Join" onPress={() =>this.checkLogin(this.state.queueId)}></Button>
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
  }
});
