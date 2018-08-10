import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistorConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['likedJobs']
};

const persistorReducer = persistCombineReducers(persistorConfig, rootReducers);

export default function configurationStore() {
    const store = createStore(persistorReducer, {}, applyMiddleware(thunk));
    const persistor = persistStore(store);

    return { persistor, store };
}
