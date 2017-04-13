package samples.linhtruong.com.dagger2sample.di.component;

import dagger.Component;
import samples.linhtruong.com.dagger2sample.react.MyReactActivity;

/**
 * CLASS DESCRIPTION
 *
 * @author linhtruong
 * @date 4/13/17 - 15:43.
 * @organization VED
 */

@Component(
        dependencies = AppComponent.class
)
public interface ReactComponent {

    void inject(MyReactActivity activity);
}
