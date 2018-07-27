import { ACTION_EMPLOYEE } from '../AppConstants';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ACTION_EMPLOYEE.update:
            return { ...state, [action.payload.prop]: action.payload.value };

        case ACTION_EMPLOYEE.create:
            const { name, phone, shift } = action.payload;
            return { ...state, name, phone, shift };

        default:
            return state;
    }
};
