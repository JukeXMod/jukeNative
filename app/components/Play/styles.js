// this is where all the style relating to this componenet will go
import { StyleSheet, Dimensions } from "react-native";

let { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
  playBox: {
    flexDirection:"row",
    width:width,
    height:85,
    paddingTop:20,
    backgroundColor: "#bdbdbd",
    paddingLeft:80,
    paddingRight:40,
    marginBottom: -490,
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    width: width,
    height: 100
  },
  names: {
    marginLeft:5
  },
  song: {
    flexDirection: "column"
  },
  play: {
    marginLeft:50,
    width:50,
    height:50
  },
  next: {
    marginLeft:20,
    width:50,
    height:50
  },
  progressBar: {
    width: width
  }
});

// style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
