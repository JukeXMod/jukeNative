export default class OathGlobal {

  /*
    * This will save Oauth token
    * globally to the app
  */
  static appSaveKey(key,value) {
    try {
      await AsyncStorage.setItem(key,value);
    } catch (error) {
      console.log(error);
    }
  }

  /*
    * This will get Oauth token
  */
  static appGetKey(key,value) {
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
    * This will remove Oauth token
  */
  static appRemoveKey(key,value) {
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
  appGetAllKeys() {
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
