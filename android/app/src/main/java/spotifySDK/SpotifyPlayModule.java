package spotifySDK;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SpotifyPlayModule extends ReactContextBaseJavaModule {
    private static final String E_NO_ACTIVITY = "E_NO_ACTIVITY";
    private static final String E_RUNTIME_ERROR = "E_RUNTIME_ERROR";
    private static final String E_AUTH_ERROR = "E_AUTH_ERROR";
    private static final String E_CANCELLED = "E_CANCELLED";

    private static final int REQUEST_CODE = 1337;

    private final List<Promise> promises = Collections.synchronizedList(new ArrayList<Promise>());

    public SpotifyPlayModule(ReactApplicationContext reactContext) {
        super(reactContext);
        //reactContext.addActivityEventListener(this);
    }

    @Override
    public String getName() {
        return "RNSpotifyPlay";
    }

    private void sendEvent(ReactContext reactContext,
                           String eventName,
                           @Nullable WritableMap params) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("songTracker", params);
    }
    WritableMap params = Arguments.createMap();
    //sendEvent(reactContext, "keyboardWillShow", params);
}
