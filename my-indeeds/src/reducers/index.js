// import { combineReducers } from 'redux';
import auth from '../reducers/auth_reducer';
import jobs from '../reducers/jobs_reducer';
import likedJobs from '../reducers/jobs_status_reducer';

export default {
    auth,
    jobs,
    likedJobs
};
