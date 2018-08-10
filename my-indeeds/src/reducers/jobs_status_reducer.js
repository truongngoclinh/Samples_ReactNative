import { LIKE_JOB, DISLIKE_JOB, CLEAR_LIKE_JOBS } from '../actions/types';
import _ from 'lodash';
import { PERSIST_REHYDRATE } from 'redux-persist/lib/constants';

export default function(state = [], action) {
    console.log('action: ' + action);
    switch (action.type) {
        case PERSIST_REHYDRATE:
            return action.payload.likedJobs || [];
        case LIKE_JOB:
            return _.uniqBy([action.payload, ...state], 'jobkey');

        case CLEAR_LIKE_JOBS:
            return [];

        case DISLIKE_JOB:
        default:
            return state;
    }
}
