package samples.linhtruong.com.dagger2sample.di.component;

import dagger.Component;
import samples.linhtruong.com.dagger2sample.app.App;
import samples.linhtruong.com.dagger2sample.di.module.ReactModule;
import samples.linhtruong.com.dagger2sample.di.scope.ApplicationScope;
import samples.linhtruong.com.dagger2sample.di.scope.ReactModuleScope;
import samples.linhtruong.com.dagger2sample.react.MyReactActivity;

/**
 * CLASS DESCRIPTION
 *
 * @author linhtruong
 * @date 4/13/17 - 15:43.
 * @organization VED
 */

@Component(
        modules = {ReactModule.class},
        dependencies = AppComponent.class
)
public interface ReactComponent {

    final class Initializer {
        public static ReactComponent init(App app) {
            return null;
        }
    }

    void inject(MyReactActivity activity);
}
