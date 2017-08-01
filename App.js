import React from 'react';
import { StyleSheet, Text, AppRegistry, View, Image, TouchableOpacity, FlatList, Button, Dimensions} from 'react-native';
import { StackNavigator } from 'react-navigation';

// import Avatar from './app/components/Avatar';
// import Host from './app/components/Host/Host.js';
// import UserRequest from './app/components/UserRequest/UserRequest.js';
// import SpotifySoundCloud from './app/components/SpotifySoundCloud';
// import Toolbar from './app/components/Toolbar/Toolbar.js';
// import SearchBarr from './app/components/Searchbar/Searchbar.js';
import HostClient from './app/Views/HostClientView';
import ClientQueue from './app/Views/ClientQueue';
import SearchBarr from './app/components/Searchbar';

const AppNavigator = StackNavigator({
  HostClientView: { screen: ClientQueue },
  ClientQueueView: { screen: HostClient}
});

     export default class App extends React.Component {

      constructor (){
        super();
      }
      static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    return (
      
      <Image style = {styles.image} source={require('./app/images/jukebox-background.jpg')} resizeMode="cover">
       <View style = {styles.view}>
        <AppNavigator ref={nav => { this.navigator = nav; }} />
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
backgroundColor: 'transparent',
  },
  view: {
    alignItems:'center',
    justifyContent: 'center',
  },

});

// skip this line if using Create React Native App
// AppRegistry.registerComponent('juke', () => SimpleApp);

// SEARCHBAR COMPONENT
//      export default class App extends React.Component {
//   render() {
//     return (
//       <Image style = {styles.containerr} source={require('./app/images/jukebox-background.jpg')} resizeMode="contain">
//         <View>
//         <SearchBarr />
//         </View>
//       </Image>
//     );
//   }
// }

