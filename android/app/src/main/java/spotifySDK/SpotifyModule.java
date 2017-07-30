package spotifySDK;
import android.app.Activity;
import android.app.Application;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.media.session.MediaSession;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.spotify.sdk.android.authentication.AuthenticationClient;
import com.spotify.sdk.android.authentication.AuthenticationRequest;
import com.spotify.sdk.android.authentication.AuthenticationResponse;
import com.spotify.sdk.android.player.Config;
import com.spotify.sdk.android.player.ConnectionStateCallback;
import com.spotify.sdk.android.player.Connectivity;
import com.spotify.sdk.android.player.Error;
import com.spotify.sdk.android.player.PlaybackBitrate;
import com.spotify.sdk.android.player.PlaybackState;
import com.spotify.sdk.android.player.Player;
import com.spotify.sdk.android.player.PlayerEvent;
import com.spotify.sdk.android.player.Spotify;
import com.spotify.sdk.android.player.SpotifyPlayer;
import com.spotify.sdk.android.player.Metadata;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SpotifyModule extends ReactContextBaseJavaModule implements ActivityEventListener, LifecycleEventListener,Player.NotificationCallback,ConnectionStateCallback {
    private static final String E_NO_ACTIVITY = "E_NO_ACTIVITY";
    private static final String E_RUNTIME_ERROR = "E_RUNTIME_ERROR";
    private static final String E_AUTH_ERROR = "E_AUTH_ERROR";
    private static final String E_CANCELLED = "E_CANCELLED";
    public static final String TAG = "SpotifySdkDemo";
    private Activity currentActvity;
    private static  String CLIENT_ID;
    private static final int REQUEST_CODE = 1337;
    private String test ="nothing happen";

    private SpotifyPlayer mPlayer;
    private PlaybackState mCurrentPlaybackState;
    private BroadcastReceiver mNetworkStateReceiver;
    private Metadata mMetadata;

    private final List<Promise> promises = Collections.synchronizedList(new ArrayList<Promise>());

    public SpotifyModule(ReactApplicationContext reactContext) {
        super(reactContext);
        reactContext.addActivityEventListener(this);
        reactContext.addLifecycleEventListener(this);
    }

    @Override
    public String getName() {
        return "SpotifyModule";
    }

    @Override
    public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
        if (requestCode == REQUEST_CODE) {
            AuthenticationResponse response = AuthenticationClient.getResponse(resultCode, data);
            switch (response.getType()) {
                // Response was successful and contains auth token
                case TOKEN:
                    //resolve(response);
                    onAuthenticationComplete(response, activity);
                    break;
                case ERROR:
                    reject(E_AUTH_ERROR, "Error during authorisation");
                    break;
                default: // cancelled
                    reject(E_CANCELLED, "User cancelled the operation");
            }
        }
    }
    @Override
    public void onNewIntent(Intent intent) {
        // no-op
    }
    private final Player.OperationCallback mOperationCallback = new Player.OperationCallback() {
        @Override
        public void onSuccess() {
            logStatus("OK!");
        }

        @Override
        public void onError(Error error) {
            logStatus("ERROR:" + error);
        }
    };

    private void onAuthenticationComplete(final AuthenticationResponse authResponse, final Activity activity) {
        // Once we have obtained an authorization token, we can proceed with creating a Player.
        logStatus("Got authentication token");
        logStatus(authResponse.getAccessToken().toString());
        if (mPlayer == null ) {
            Config playerConfig = new Config(currentActvity, authResponse.getAccessToken(), CLIENT_ID);
            // Since the Player is a static singleton owned by the Spotify class, we pass "this" as
            // the second argument in order to refcount it properly. Note that the method
            // Spotify.destroyPlayer() also takes an Object argument, which must be the same as the
            // one passed in here. If you pass different instances to Spotify.getPlayer() and
            // Spotify.destroyPlayer(), that will definitely result in resource leaks.
            mPlayer = Spotify.getPlayer(playerConfig, this, new SpotifyPlayer.InitializationObserver() {
                @Override
                public void onInitialized(SpotifyPlayer player) {
                    logStatus("-- Player initialized --");
                    mPlayer.setConnectivityStatus(mOperationCallback, getNetworkConnectivity(activity));
                    mPlayer.addNotificationCallback(SpotifyModule.this);
                    mPlayer.addConnectionStateCallback(SpotifyModule.this);
//                     Trigger UI refresh
//                     updateView();
                    test = "we got this player initalized";
                    resolve(authResponse);
                }

                @Override
                public void onError(Throwable error) {
                    logStatus("Error in initialization: " + error.getMessage());
                }
            });
        } else {
            mPlayer.login(authResponse.getAccessToken());

        }
    }
    /**
     * Registering for connectivity changes in Android does not actually deliver them to
     * us in the delivered intent.
     *
     * @param context Android context
     * @return Connectivity state to be passed to the SDK
     */
    private Connectivity getNetworkConnectivity(Context context) {
        ConnectivityManager connectivityManager;
        connectivityManager = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo activeNetwork = connectivityManager.getActiveNetworkInfo();
        if (activeNetwork != null && activeNetwork.isConnected()) {
            return Connectivity.fromNetworkType(activeNetwork.getType());
        } else {
            return Connectivity.OFFLINE;
        }
    }

    @ReactMethod
    public void launchAuth(String clientId, String redirectUri, final Promise promise) {
        currentActvity = getCurrentActivity();
        if (currentActvity == null) {
            promise.reject(E_NO_ACTIVITY, "No activity");
            return;
        }

        promises.add(promise);

        try {
            AuthenticationRequest.Builder builder = new AuthenticationRequest.Builder(clientId, AuthenticationResponse.Type.TOKEN, redirectUri);

            builder.setScopes(new String[]{"user-read-private", "playlist-read", "playlist-read-private", "streaming"});
            AuthenticationRequest request = builder.build();
            CLIENT_ID = clientId;
            AuthenticationClient.openLoginActivity(currentActvity, REQUEST_CODE, request);
        } catch (RuntimeException e) {
            reject(E_RUNTIME_ERROR, e);
        }
    }
    @ReactMethod
    public void hello(Promise p) {
        p.resolve(test);
    }

    @ReactMethod
    public void onPlayButtonClicked() {

    String uri;
//        switch (view.getId()) {
//            case R.id.play_track_button:
//                uri = TEST_SONG_URI;
//                break;
//            case R.id.play_mono_track_button:
//                uri = TEST_SONG_MONO_URI;
//                break;
//            case R.id.play_48khz_track_button:
//                uri = TEST_SONG_48kHz_URI;
//                break;
//            case R.id.play_playlist_button:
//                uri = TEST_PLAYLIST_URI;
//                break;
//            case R.id.play_album_button:
//                uri = TEST_ALBUM_URI;
//                break;
//            default:
//                throw new IllegalArgumentException("View ID does not have an associated URI to play");
//        }

    logStatus("Starting playback for spotify:track:6KywfgRqvgvfJc3JRwaZd");
    mPlayer.playUri(mOperationCallback, "spotify:track:6KywfgRqvgvfJc3JRwaZd", 0, 0);
}


    public void onPauseButtonClicked(View view) {
        if (mCurrentPlaybackState != null && mCurrentPlaybackState.isPlaying) {
            mPlayer.pause(mOperationCallback);
        } else {
            mPlayer.resume(mOperationCallback);
        }
    }

    public void onSkipToPreviousButtonClicked(View view) {
        mPlayer.skipToPrevious(mOperationCallback);
    }

    public void onSkipToNextButtonClicked(View view) {
        mPlayer.skipToNext(mOperationCallback);
    }

    public void onQueueSongButtonClicked(String queue) {
        mPlayer.queue(mOperationCallback,queue);
    }

    public void onToggleShuffleButtonClicked() {
        mPlayer.setShuffle(mOperationCallback, !mCurrentPlaybackState.isShuffling);
    }

    public void onToggleRepeatButtonClicked() {
        mPlayer.setRepeat(mOperationCallback, !mCurrentPlaybackState.isRepeating);
    }

    public void onSeekButtonClicked(Integer seek) {
        mPlayer.seekToPosition(mOperationCallback, seek);
    }

    public void onLowBitrateButtonPressed() {
        mPlayer.setPlaybackBitrate(mOperationCallback, PlaybackBitrate.BITRATE_LOW);
    }

    public void onNormalBitrateButtonPressed() {
        mPlayer.setPlaybackBitrate(mOperationCallback, PlaybackBitrate.BITRATE_NORMAL);
    }

    public void onHighBitrateButtonPressed() {
        mPlayer.setPlaybackBitrate(mOperationCallback, PlaybackBitrate.BITRATE_HIGH);
    }

    private void resolve(AuthenticationResponse response) {
        WritableMap data = makeRNFriendly(response);
        List<Promise> promises = this.promises;
        for (Promise p : promises) {
            p.resolve(data);
        }
        this.promises.removeAll(promises);
    }

    private void reject(String errorCode, RuntimeException e) {
        reject(errorCode, e.getMessage());
    }

    private void reject(String errorCode, String message) {
        List<Promise> promises = this.promises;
        for (Promise p : promises) {
            p.reject(errorCode, message);
        }
        this.promises.removeAll(promises);
    }

    private WritableMap makeRNFriendly(AuthenticationResponse response) {
        WritableMap ret = Arguments.createMap();
        ret.putString(KEY_TOKEN, response.getAccessToken());
        ret.putString(KEY_CODE, response.getCode());
        ret.putString(KEY_ERROR, response.getError());
        ret.putString(KEY_STATE, response.getState());
        ret.putInt(KEY_EXPIRES_IN, response.getExpiresIn());
        return ret;
    }

    private void logStatus(String status) {
        Log.i(TAG, status);
//        if (!TextUtils.isEmpty(mStatusText.getText())) {
//            mStatusText.append("\n");
//        }
//        mStatusText.append(">>>" + status);
//        mStatusTextScrollView.post(new Runnable() {
//            @Override
//            public void run() {
//                // Scroll to the bottom
//                mStatusTextScrollView.fullScroll(View.FOCUS_DOWN);
//            }
//        });
    }
    private static final String KEY_TOKEN = "token";
    private static final String KEY_CODE = "code";
    private static final String KEY_ERROR = "error";
    private static final String KEY_STATE = "state";
    private static final String KEY_EXPIRES_IN = "expiresIn";

    @Override
    public void onPlaybackEvent(PlayerEvent event) {
        // Remember kids, always use the English locale when changing case for non-UI strings!
        // Otherwise you'll end up with mysterious errors when running in the Turkish locale.
        // See: http://java.sys-con.com/node/46241
        logStatus("Event: " + event);
        mCurrentPlaybackState = mPlayer.getPlaybackState();
        mMetadata = mPlayer.getMetadata();
        Log.i(TAG, "Player state: " + mCurrentPlaybackState);
        Log.i(TAG, "Metadata: " + mMetadata);
    }

    @Override
    public void onPlaybackError(Error error) {
        logStatus("Err: " + error);
    }

    @Override
    public void onLoggedIn() {
        logStatus("Login complete");
        //updateView();
    }

    @Override
    public void onLoggedOut() {
        logStatus("Logout complete");
        //updateView();
    }

    public void onLoginFailed(int error) {
        logStatus("Login error "+ error);
    }

    @Override
    public void onTemporaryError() {
        logStatus("Temporary error occurred");
    }

    @Override
    public void onConnectionMessage(final String message) {
        logStatus("Incoming connection message: " + message);
    }

    @Override
    public void onHostResume() {
//        mNetworkStateReceiver = new BroadcastReceiver() {
//            @Override
//            public void onReceive(Context context, Intent intent) {
//                if (mPlayer != null) {
//                    Connectivity connectivity = getNetworkConnectivity(currentActvity.getBaseContext());
//                    logStatus("Network state changed: " + connectivity.toString());
//                    mPlayer.setConnectivityStatus(mOperationCallback, connectivity);
//                }
//            }
//        };
//
//        IntentFilter filter = new IntentFilter(ConnectivityManager.CONNECTIVITY_ACTION);
//        currentActvity.registerReceiver(mNetworkStateReceiver, filter);
//
//        if (mPlayer != null) {
//            mPlayer.addNotificationCallback(SpotifyModule.this);
//            mPlayer.addConnectionStateCallback(SpotifyModule.this);
//        }

    }

    @Override
    public void onHostPause() {
//        currentActvity.unregisterReceiver(mNetworkStateReceiver);
//
//        // Note that calling Spotify.destroyPlayer() will also remove any callbacks on whatever
//        // instance was passed as the refcounted owner. So in the case of this particular example,
//        // it's not strictly necessary to call these methods, however it is generally good practice
//        // and also will prevent your application from doing extra work in the background when
//        // paused.
//        if (mPlayer != null) {
//            mPlayer.removeNotificationCallback(SpotifyModule.this);
//            mPlayer.removeConnectionStateCallback(SpotifyModule.this);
//        }

    }

    @Override
    public void onHostDestroy() {
        Spotify.destroyPlayer(this);
    }
}
