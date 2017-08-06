package com.react_native_spotify_ios_sdk_boilerplate;

import android.app.Application;

import com.facebook.react.ReactApplication;
<<<<<<< HEAD
=======
import com.brentvatne.react.ReactVideoPackage;
>>>>>>> addingAndriodSpotify
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactlibrary.RNSdkSpotifyPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.brentvatne.react.ReactVideoPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
<<<<<<< HEAD
            new VectorIconsPackage(),
          new RNSdkSpotifyPackage()
=======
            new ReactVideoPackage(),
            new VectorIconsPackage(),
          new RNSdkSpotifyPackage(),
          new ReactVideoPackage()

>>>>>>> addingAndriodSpotify
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
