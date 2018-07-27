import { ACTION_EMPLOYEE } from '../AppConstants';

export default (state = {}, action) => {
    switch (action.type) {
        case ACTION_EMPLOYEE.fetch:
            console.log('successfully fetch action: ' + action);
            console.dir(action);
            return action.payload;

        default:
            return state;
    }
};
