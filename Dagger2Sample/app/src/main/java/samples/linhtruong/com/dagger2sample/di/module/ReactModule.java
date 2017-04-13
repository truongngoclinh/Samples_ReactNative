package samples.linhtruong.com.dagger2sample.di.module;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.shell.MainReactPackage;
import dagger.Module;
import dagger.Provides;
import samples.linhtruong.com.dagger2sample.app.App;
import samples.linhtruong.com.dagger2sample.di.scope.ApplicationScope;

/**
 * CLASS DESCRIPTION
 *
 * @author linhtruong
 * @date 4/13/17 - 15:21.
 * @organization VED
 */

@Module
public class ReactModule {

    public App mApp;

    public ReactModule(App app) {
        mApp = app;
    }

    @Provides
    @ApplicationScope
    ReactInstanceManager getReactInstanceManager() {
        return ReactInstanceManager.builder()
                .setApplication(mApp)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(samples.linhtruong.com.dagger2sample.BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .build();
    }
}
