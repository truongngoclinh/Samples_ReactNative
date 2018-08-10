import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();
        this.onAuthComplete(this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        console.log('onAuthComplete');
        if (props.token) {
            console.log('navigating to map screen');
            this.props.navigation.navigate('map');
        }
    }

    render() {
        return <View />;
    }
}

const mapStateToProps = ({ auth }) => {
    console.log('mapStateToProps');
    return {
        token: auth.token
    };
};

export default connect(
    mapStateToProps,
    actions
)(AuthScreen);
