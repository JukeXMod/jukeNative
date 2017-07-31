import native from 'react-native-spotify-sdk';

export default class Spotify {
  constructor(){
    this.setup = this.setup.bind(this);
    this.launchLogin = this.launchLogin.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this.playUri = this.playUri.bind(this);
  }

  static async setup() {
    try {
       let complete = await native.setup("32e30aa113a24db9809034cc16b7c018","my-app-auth://spotify");
      return complete;
    } catch (e) {
      console.error(e);
    }
  }

  static async playUri() {
    try {
      await native.playUri("spotify:track:2zy79BntQ1kumEUeqM5O84");
    } catch (e) {
      console.error(e);
    }
  }


  static async launchLogin() {
    try {
      let complete = await this.setup();
      console.warn(complete);
      if(complete ==="Success") {
        let { token } = await native.launchLogin();
        console.warn(token);
        if(token){
          let hi = await native.setAccessToken(token);
          console.warn(hi);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }

  static async pauseResume() {
    try {
      await native.pause();
    } catch (e) {
      console.error(e);
    }
  }

}
