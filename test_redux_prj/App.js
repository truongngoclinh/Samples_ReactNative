import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './App/components/reducers';
import { Header } from './App/components/common';
import LibraryList from './App/components/LibraryList';

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Test redux" />
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;
