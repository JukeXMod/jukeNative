import native from "./allNative";

export default class Spotify {
  constructor(){
    this.hello = this.hello.bind(this);
    this.launchAuth = this.launchAuth.bind(this);
    this.onPlayButtonClicked = this.onPlayButtonClicked.bind(this);
  }

  /*
    * This is just to prove concept
   */
static async hello() {
    try {
      let hello = await native.hello();
      console.warn(hello);
    } catch (e) {
      console.error(e);
    }
  }

  static async onPlayButtonClicked() {
      try {
        await native.onPlayButtonClicked();
      } catch (e) {
        console.error(e);
      }
    }

  static async launchAuth() {
  try {
    await native.launchAuth("32e30aa113a24db9809034cc16b7c018","my-app-auth://spotify");
  } catch (e) {
    console.error(e);
  }
}

}
