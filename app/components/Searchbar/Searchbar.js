// Searchbar Component

import React, { Component } from 'react';
import { StyleSheet, AppRegistry, Text, View, Image, TextInput, TouchableHightLight } from 'react-native';
import { SearchBar, SocialIcon } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';


export default class SearchBarr extends Component {
  render() {
    return (
    	<View>
        <SearchBar noIcon placeholder = "Search..."/>
     	</View>
    );
  }
}

// export const styles = StyleSheet.create({
//   searchbar: {
//     marginTop: 5,

//   }



// SEARCH BAR STYLING style={{width: 250, height: 50, bottom: -10, paddingLeft: 125, fontWeight: "bold", fontSize: 20}}
