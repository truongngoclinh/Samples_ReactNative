package samples.linhtruong.com.dagger2sample.react;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.design.widget.Snackbar;
import android.view.KeyEvent;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import samples.linhtruong.com.base.BaseActivity;
import samples.linhtruong.com.dagger2sample.R;
import samples.linhtruong.com.dagger2sample.app.App;
import samples.linhtruong.com.dagger2sample.di.component.ReactComponent;
import samples.linhtruong.com.utils.FVPermissionUtils;

import javax.inject.Inject;

/**
 * CLASS DESCRIPTION
 *
 * @author linhtruong
 * @date 4/13/17 - 15:17.
 * @organization VED
 */

public class MyReactActivity extends BaseActivity implements DefaultHardwareBackBtnHandler {

    private ReactRootView mReactRootView;
    private ReactComponent mReactComponent;

    @Inject
    ReactInstanceManager mReactInstanceManager;

    @Override
    protected void onCreateUI(Bundle bundle) {
        mReactRootView = new ReactRootView(this);
        mReactRootView.startReactApplication(mReactInstanceManager, "HelloWorld", null);

        setContentView(mReactRootView);

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            grantOverlayPermission();
        }
    }

    @Override
    protected void initDependency() {
        mReactComponent = ReactComponent.Initializer.init(App.getAppcomponent(), (App) getApplicationContext());
        mReactComponent.inject(this);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

    }

    /**
     * grant overlay permission in dev mode
     * to let react show errors.
     */
    private void grantOverlayPermission() {
        if (!FVPermissionUtils.isPermissionGranted(this, FVPermissionUtils.Permissions.OVERLAY)) {
            FVPermissionUtils.requestPermission(this, FVPermissionUtils.Permissions.OVERLAY);
        }
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == FVPermissionUtils.REQUEST_PERMISSION_SETTING) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                if (Settings.canDrawOverlays(this)) {
                    // do nothing
                } else {
                    Snackbar.make(this.findViewById(android.R.id.content), getResources().getString(R.string.dialog_permission_message), Snackbar.LENGTH_LONG);
                }
            }
        }

        super.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    public void invokeDefaultOnBackPressed() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.ECLAIR) {
            super.onBackPressed();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostPause(this);
        }
    }

    @Override
    protected boolean isValid() {
        return false;
    }

    @Override
    protected void onRestart() {
        super.onRestart();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostResume(this, this);
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mReactInstanceManager != null) {
            mReactInstanceManager.onHostDestroy();
        }
    }

    @Override
    public void onBackPressed() {
        if (mReactInstanceManager != null) {
            mReactInstanceManager.onBackPressed();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
            mReactInstanceManager.showDevOptionsDialog();
            return true;
        }
        return super.onKeyUp(keyCode, event);
    }
}
