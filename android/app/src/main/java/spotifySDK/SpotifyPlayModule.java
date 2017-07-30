package spotifySDK;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.spotify.sdk.android.authentication.AuthenticationClient;
import com.spotify.sdk.android.authentication.AuthenticationResponse;
import com.spotify.sdk.android.player.Config;
import com.spotify.sdk.android.player.Player;
import com.spotify.sdk.android.player.Spotify;
import com.spotify.sdk.android.player.SpotifyPlayer;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SpotifyPlayModule extends ReactContextBaseJavaModule implements ActivityEventListener {
    private static final String E_NO_ACTIVITY = "E_NO_ACTIVITY";
    private static final String E_RUNTIME_ERROR = "E_RUNTIME_ERROR";
    private static final String E_AUTH_ERROR = "E_AUTH_ERROR";
    private static final String E_CANCELLED = "E_CANCELLED";
    private RnSpotifyPlayer RnPlayer;
    private static final int REQUEST_CODE = 1337;
    private Player mPlayer;

    // TODO: Replace with your client ID
    private static final String CLIENT_ID = "yourclientid";
    // TODO: Replace with your redirect URI
    private static final String REDIRECT_URI = "yourcustomprotocol://callback";

    private final List<Promise> promises = Collections.synchronizedList(new ArrayList<Promise>());

    public SpotifyPlayModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
        RnSpotifyPlayer RnPlayer = new RnSpotifyPlayer();
    }

    @Override
    public String getName() {
        return "RNSpotifyPlay";
    }

//    private final ActivityEventListener mActivityEventListener = new BaseActivityEventListener() {
////        @Override
//        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent intent) {
//             RnSpotifyPlayer modPlayer = SpotifyPlayModule.this.RnPlayer;
////          Check if result comes from the correct activity
////            if (requestCode == REQUEST_CODE) {
////                AuthenticationResponse response = AuthenticationClient.getResponse(resultCode, intent);
////                if (response.getType() == AuthenticationResponse.Type.TOKEN) {
////                    Config playerConfig = new Config(SpotifyPlayModule.this.RnPlayer, response.getAccessToken(), CLIENT_ID);
////                    Spotify.getPlayer(playerConfig, this, new SpotifyPlayer.InitializationObserver() {
////                        @Override
////                        public void onInitialized(SpotifyPlayer spotifyPlayer) {
////                            mPlayer = spotifyPlayer;
////                            mPlayer.addConnectionStateCallback(SpotifyPlayModule.this.RnPlayer);
////                            mPlayer.addNotificationCallback(SpotifyPlayModule.this.RnPlayer);
////                        }
////
////                        @Override
////                        public void onError(Throwable throwable) {
////                            Log.e("MainActivity", "Could not initialize player: " + throwable.getMessage());
////                        }
////                    });
////                }
////            }
//        }
//    };
    @ReactMethod
    public void startMe(Promise promise) {
         Activity test = getCurrentActivity();
        if(test ==null) {
            promise.reject(E_NO_ACTIVITY,"No Activity");
            return;
        }
        try {
            this.RnPlayer.onLoginButtonClicked();
        } catch (RuntimeException e) {
            promise.reject(E_RUNTIME_ERROR, e);
        }
    }
    @ReactMethod
    public void hello(Promise p) {
        p.resolve("This is andriod play module working");
    }


    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {

    }

    @Override
    public void onNewIntent(Intent intent) {

    }
}
