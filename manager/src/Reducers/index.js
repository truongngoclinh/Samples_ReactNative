import { combineReducers } from 'redux';
import LoginAuthReducer from '../Login/LoginAuthReducer';
import EmployeeListReducer from '../Employee/EmployeeListReducer';
import EmployeeReducer from '../Employee/EmployeeReducer';

export default combineReducers({
    employee: EmployeeReducer,
    auth: LoginAuthReducer,
    employee_list: EmployeeListReducer
});
