import { ACTION_EMPLOYEE } from '../AppConstants';
import firebase from 'firebase';
import { Actions, ActionConst } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: ACTION_EMPLOYEE.update,
        payload: { prop, value }
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    console.log(name + ` - ${phone} - ` + shift);
    return dispatch => {
        firebaseDatabaseRef()
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: ACTION_EMPLOYEE.create, payload: '' });
                Actions.main();
            });
    };
};

export const employeeFetch = () => {
    return dispatch => {
        firebaseDatabaseRef().on('value', snapshot => {
            dispatch({ type: ACTION_EMPLOYEE.fetch, payload: snapshot.val() });
        });
    };
};

const firebaseDatabaseRef = () => {
    const { currentUser } = firebase.auth();
    return firebase.database().ref(`/users/${currentUser.uid}/employees`);
};
