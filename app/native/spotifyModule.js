import native from 'react-native-spotify-sdk';
import { AsyncStorage } from 'react-native';

export default class Spotify {
  constructor(){
    this.setup = this.setup.bind(this);
    this.launchLogin = this.launchLogin.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this.playUri = this.playUri.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
    this.queue = this.queue.bind(this);
    this.setNextTrack = this.setNextTrack.bind(this);
    this.skipToNext = this.skipToNext.bind(this);
  }

  static async setup(codeOrToken) {
    try {
       let complete = await native.setup("32e30aa113a24db9809034cc16b7c018","my-app-auth://spotify",codeOrToken);
      return complete;
    } catch (e) {
      console.error(e);
    }
  }

  static async isPlaying() {
    try {
      return await native.isPlaying();
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
      let complete = await this.setup("TOKEN");
      if(complete === "Success") {
        let { token } = await native.launchLogin();
        if(token) {
          await native.setAccessToken(token);
          try {
            AsyncStorage.setItem("token",token);
          } catch (error) {
            console.warn(error);
          }
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
  static async skipToNext(track) {
    try {
      await native.skipToNext();
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

  static async startQueue() {
    try {
      return await native.startQueue();
    } catch (e) {
      console.error(e);
    }
  }

  static async addMultiSong(songArray) {
    //clean data here to be passed
    try {
      await native.addMultiSong(songArray);
    } catch (e) {
      console.error(e);
    }
  }

  static async whenSongIsFinish() {
    try {
      return await native.whenSongIsFinish();
    } catch (e) {
      console.error(e);
    }
  }
}
