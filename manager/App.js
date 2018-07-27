import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/Reducers';
import firebase from 'firebase';
import LoginForm from './src/Login/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './src/Navigation';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCsopaznqPtXI1oZUmrVApKPWnnkt-gAQo',
            authDomain: 'manager-4bd7c.firebaseapp.com',
            databaseURL: 'https://manager-4bd7c.firebaseio.com',
            projectId: 'manager-4bd7c',
            storageBucket: 'manager-4bd7c.appspot.com',
            messagingSenderId: '473181153946'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
