package samples.linhtruong.com.dagger2sample.di.scope;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;

import javax.inject.Scope;

/**
 * CLASS DESCRIPTION
 *
 * @author linhtruong
 * @date 3/4/17 - 01:53.
 * @organization VED
 */

@Scope
@Retention(RetentionPolicy.RUNTIME)
public @interface LoginScope {
}
