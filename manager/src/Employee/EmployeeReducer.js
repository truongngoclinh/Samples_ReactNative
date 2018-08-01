import { ACTION_EMPLOYEE } from '../AppConstants';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday',
    deteled: '0'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_EMPLOYEE.update:
            return {
                ...state,
                [action.payload.prop]: action.payload.value,
                deleted: '0'
            };

        case ACTION_EMPLOYEE.create:
        case ACTION_EMPLOYEE.save_success:
            return INITIAL_STATE;

        case ACTION_EMPLOYEE.delete_success:
            return { ...INITIAL_STATE, deleted: action.payload };

        default:
            return state;
    }
};
