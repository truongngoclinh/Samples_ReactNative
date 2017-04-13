package samples.linhtruong.com.dagger2sample.di.scope;

import javax.inject.Scope;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

/**
 * CLASS DESCRIPTION
 *
 * @author linhtruong
 * @date 4/13/17 - 18:03.
 * @organization VED
 */

@Scope
@Retention(RetentionPolicy.RUNTIME)
public @interface ReactModuleScope {
}
