import native from 'react-native-spotify-sdk';

export default class Spotify {
  constructor(){
    this.setup = this.setup.bind(this);
    this.launchLogin = this.launchLogin.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this.playUri = this.playUri.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
  }

  static async setup() {
    try {
       let complete = await native.setup("32e30aa113a24db9809034cc16b7c018","my-app-auth://spotify");
      return complete;
    } catch (e) {
      console.error(e);
    }
  }

  static async playUri(addUri) {
    try {
      await native.playUri(addUri);
    } catch (e) {
      console.error(e);
    }
  }


  static async launchLogin() {
    try {
      let complete = await this.setup();
      console.warn(complete);
      if(complete === "Success") {
        let { token } = await native.launchLogin();
        console.warn(token);
        if(token) {
          let hi = await native.setAccessToken(token);
          console.warn(hi);
          this.isPlaying();
        }
        else {
          console.warn("Token was not returned");
        }
      }
      else{
        console.warn("Login failed");
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

  static async queue(addUri) {
    try {
       let complete = await native.queue(addUri);
       if(complete === "Success") {
         // update the
       }
       else{
         console.warn("Error occured queueing song");
       }
    } catch (e) {
      console.error(e);
    }
  }

  static async getNextTrack() {
    try {
       let nextTrack = await native.getNextTrack();
       if(nextTrack === ""){
         console.warn("No track queued");
       }
    } catch (e) {
      console.error(e);
    }
  }

  static async setNextTrack(addUri) {
    try {
      await native.setNextTrack(addUri);
    } catch (e) {
      console.error(e);
    }
  }

  static async whenSongIsFinish() {
    try {
      let songFinished = await native.whenSongIsFinish();
    } catch (e) {
      console.error(e);
    }
  }

  static async isPlaying() {
    try {
      let playState =  await native.isPlaying();
      if(playState === "failed") {
        return false;
      }
      return true;
    } catch (e) {
      console.warn(e);
    }
  }

}
