import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import Slides from '../components/welcome/Slides';
import _ from 'lodash';
import { AppLoading } from 'expo';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'Use this to get a job', color: '#009688' },
    { text: 'Set your location, then swipe away', color: '#03A9A9' }
];

class WelcomeScreen extends Component {
    state = { token: null };

    async componentWillMount() {
        console.log('componentWillMount');
        let token = await AsyncStorage.getItem('facebook_token');
        console.log('token: ' + token);
        if (token) {
            this.props.navigation.navigate('map');
            this.setState({ token });
        } else {
            this.setState({ token: false });
        }
    }

    // onSlideComplete() {} // bind(this)
    onSlideComplete = () => {
        this.props.navigation.navigate('auth');
    };

    render() {
        if (_.isNull(this.state.token)) {
            return <AppLoading />;
        }

        return <Slides data={SLIDE_DATA} onBoarding={this.onSlideComplete} />;
    }
}

export default WelcomeScreen;
