import { ACTION_EMPLOYEE } from '../AppConstants';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
    console.log('employeeUpdate: => ' + value);
    return {
        type: ACTION_EMPLOYEE.update,
        payload: { prop, value }
    };
};

export const employeeDelete = ({ uid }) => {
    console.log(`employeeDelete: ${uid}`);
    return dispatch => {
        firebaseDatabaseRef(`/employees/${uid}`)
            .remove()
            .then(() => {
                console.log('Delete success!');
                dispatch({
                    type: ACTION_EMPLOYEE.delete_success,
                    payload: '1'
                });
            });
    };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
    console.log('employeeSave uid: ' + uid);
    return dispatch => {
        firebaseDatabaseRef(`/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                console.log('saved');
                dispatch({
                    type: ACTION_EMPLOYEE.save_success,
                    payload: ''
                });
                Actions.pop();
            });
    };
};

export const employeeCreate = ({ name, phone, shift }) => {
    console.log('employeeCreate ' + name + ` - ${phone} - ` + shift);

    return dispatch => {
        firebaseDatabaseRef('/employees')
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: ACTION_EMPLOYEE.create, payload: '' });
                Actions.main();
            });
    };
};

export const employeeFetch = () => {
    console.log('employeeFetch');
    return dispatch => {
        firebaseDatabaseRef('/employees').on('value', snapshot => {
            dispatch({ type: ACTION_EMPLOYEE.fetch, payload: snapshot.val() });
        });
    };
};

const firebaseDatabaseRef = path => {
    const { currentUser } = firebase.auth();
    return firebase.database().ref(`/users/${currentUser.uid}${path}`);
};
