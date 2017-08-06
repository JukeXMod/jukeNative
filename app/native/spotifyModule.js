import native from 'react-native-spotify-sdk';

export default class Spotify {
  constructor(){
    this.setup = this.setup.bind(this);
    this.launchLogin = this.launchLogin.bind(this);
    this.pauseResume = this.pauseResume.bind(this);
    this.playUri = this.playUri.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
    this.queue = this.queue.bind(this);
    this.setNextTrack = this.setNextTrack.bind(this);
    this.getNextTrack = this.getNextTrack.bind(this);

  }

  static async setup() {
    try {
       let complete = await native.setup("32e30aa113a24db9809034cc16b7c018","my-app-auth://spotify","code");
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
        let { token, code } = await native.launchLogin();
        console.warn("code"+code);
        if(token) {
          let complete = await native.setAccessToken(token);
          try {
            await AsyncStorage.setItem("code",code);
            await AsyncStorage.setItem("token",token);
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

  static async queue(songUri) {
    try {
        let complete = await native.queue(songUri);
        if(complete === "Success") {
          console.log(complete);
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
      songsList = [
        "spotify:track:5ELRkzdzz0HvGpMDlfZHkV",
        "spotify:track:0Ph6L4l8dYUuXFmb71Ajnd",
        "spotify:track:2HNZxbvFvasRtlOJ9M6DgR",
        "spotify:track:6N5DRCQUSXT1qQqmqsO92B",
        "spotify:track:0f37VQs969vZUL4gVfHRV9",
        "spotify:track:4fK6E2UywZTJIa5kWnCD6x",
        "spotify:track:78ZzF9pK3foniEnK64XzX5"
      ];
       if(songsList.length > 0) {
         let song = songsList.pop();
         await native.playUri(song);
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
