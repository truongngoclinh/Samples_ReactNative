import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { clearLikedJobs } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <Button
                    title="Reset Liked Jobs"
                    large
                    icon={{ name: 'delete-forever' }}
                    backgroundColor="#F44336"
                    onPress={this.props.clearLikedJobs}
                />
            </View>
        );
    }
}

export default connect(
    null,
    { clearLikedJobs }
)(SettingsScreen);
