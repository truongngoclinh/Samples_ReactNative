import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from './types';
import { Facebook } from 'expo';
import { AsyncStorage } from 'react-native';

export const facebookLogin = () => async dispatch => {
    console.log('facebookLogin()');
    let token = await AsyncStorage.getItem('facebook_token');
    if (token) {
        console.log('found token: ' + token);
        // Dispatch login success
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        console.log('doAuth()');
        // Start auth flow
        doFacebookLogin();
    }
};

const doFacebookLogin = async dispatch => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
        '225369868165123',
        {
            permissions: ['public_profile']
        }
    );

    if (type === 'cancel') {
        console.log('user cancels dialog');
        dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    console.log('save token: ' + token);
    await AsyncStorage.setItem('facebook_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
