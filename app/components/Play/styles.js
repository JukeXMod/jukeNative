// this is where all the style relating to this componenet will go
import { StyleSheet, Dimensions } from "react-native";

let { width } = Dimensions.get('window');
export default styles = StyleSheet.create({
  playBox: {
    flexDirection:"row",
    width:width,
    height:85,
    paddingTop:20,
    backgroundColor: "skyblue",
    justifyContent: "center",
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    width: width,
    height: 100,

  },
  names: {
    padding:10,
  },
  pausePlay: {
    padding:10,
  },
  next: {
    padding:10
  },
  progressBar: {
    width: width
  }
});

// style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
