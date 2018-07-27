import { ACTION_LOGINS } from '../AppConstants';

const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_LOGINS.email_changed:
            return { ...state, email: action.payload };

        case ACTION_LOGINS.password_changed:
            return { ...state, password: action.payload };

        case ACTION_LOGINS.login_user_sucess:
            return {
                ...state,
                ...INITIAL_STATE,
                user: action.payload
            };

        case ACTION_LOGINS.login_user_fail:
            return {
                ...state,
                error: 'Authentication failed.',
                loading: false
            };

        case ACTION_LOGINS.login_user:
            return { ...state, loading: true, error: '' };

        default:
            return state;
    }
};
