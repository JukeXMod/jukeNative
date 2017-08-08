import { AsyncStorage } from "react-native";
export default class appKeyStore {

  /*
    * This will save Oauth token
    * globally to the app
  */
  static async saveKey(key,value) {
    return await AsyncStorage.setItem(key,value);
  }

  /*
    * This will get Oauth token
  */
  static async getKey(key,value) {
       return await AsyncStorage.getItem(key);
  }

  /*
    * This will remove Oauth token
  */
  static async removeKey(key,value) {
    try {
       let value = await AsyncStorage.getItem(key);
       if(!value == null) {
         return value;
       }
    } catch (error) {
      console.log(error);
    }
  }

  /*
    * This will get all Oauth tokens
  */
  static async getAllKeys() {
    try {
       let value = await AsyncStorage.getAllKeys();
       if(!value == null) {
         return value;
       }
    } catch (error) {
      console.log(error);
    }
  }

}
