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
    this.nameInput = this.nameInput.bind(this);
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
    db.getSongs(queueId)
    .then(function(result) {
      if(!result.data){
        console.warn("Please check your queueID");
      }
      else {

        this.props.navigation.navigate("ClientQueueView", {
            data:{
              userName:this.state.userName,
              queueId:this.state.queueId,
              songQueue: result.data
            }
          }
        );
      }
    }.bind(this))
    .catch(function(e) {
      console.warn(e);
    });
  }
  nameInput(text) {
   this.setState({userName: text});
  }
  queueInput(text) {
   this.setState({queueId: text});
  }
  render() {
    return (
      <View>
        <FormLabel><Text h4>Name</Text></FormLabel>
        <FormInput onChangeText={this.nameInput} />
        <FormValidationMessage>
          {'This field is required'}
        </FormValidationMessage>
        <FormLabel><Text h4>Queue Id</Text></FormLabel>
        <FormInput onChangeText={this.queueInput} keyboardType={'numeric'}  />
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
