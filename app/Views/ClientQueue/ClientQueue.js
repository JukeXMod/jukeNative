import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
// import SpotifySoundCloud from '../components/SpotifySoundCloud/SpotifySoundCloud.js';
import Toolbar from '../../components/Toolbar/Toolbar.js';
import { StackNavigator } from 'react-navigation';
import Searchbar from '../../components/Searchbar';

export default class ClientQueue extends React.Component {

  render() {
    return (
        <Image style = {styles.image} source={require('../../images/new.jpg')} resizeMode="cover">

        <View style = {styles.container}>
        <Toolbar style = {styles.toolbar}>

          <View title="QUEUE" style={styles.content}>

            <FlatList style = {styles.list}
          data={[
            {key: 'PLACEHOLDER'},
            {key: 'PLACEHOLDERR'},
            {key: 'PLACEHOLDERRR'},
            {key: 'PLACEHOLDERRRR'},
            {key: 'PLACEHOLDERRRRR klasdjfkl;adsjfkl;sadjflsajlk;dfl;sadjfkljs;la'},
            {key: 'ABCj lksdfjas;dlkjflksadjfldksjl;kfjla;sjdfljsdkl;j'},
            {key: 'DEF'},
            {key: 'EFG'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
          </View>

          <View title="ADD SONG" style={styles.content}>

            <Text style={styles.text}>
            TEST TEST TEST TEST TEST TEST TEST TEST
              </Text>
          </View>


        </Toolbar>
        </View>
      </Image>
    );
  }
}
let {width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: width,
    height: height,
    backgroundColor:'transparent',

  },
  image: {
    height: height,
    width: width,
  },

  list: {
    backgroundColor: 'white',
    marginTop: 20,
  },
  text: {
    backgroundColor: 'white',
    marginTop: 20,
  }


});
