import firebase from 'firebase';
import { ACTION_LOGINS } from '../AppConstants';
import { Actions } from 'react-native-router-flux';

export const emailChanged = text => {
    return {
        type: ACTION_LOGINS.email_changed,
        payload: text
    };
};

export const passwordChanged = text => {
    return {
        type: ACTION_LOGINS.password_changed,
        payload: text
    };
};

export const loginRequest = ({ email, password }) => {
    return dispatch => {
        dispatch({ type: ACTION_LOGINS.login_user });

        firebaseAuth()
            .signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch(error => {
                console.log(error);
                firebaseAuth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch(() => loginUserFail(dispatch));
            });
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: ACTION_LOGINS.login_user_sucess,
        payload: user
    });

    Actions.main();
};

const loginUserFail = dispatch => {
    dispatch({
        type: ACTION_LOGINS.login_user_fail,
        payload: null
    });
};

const firebaseAuth = () => {
    return firebase.auth();
};
