import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Button, Icon } from 'react-native-elements';

class MapScreen extends Component {
    static navigationOptions = {
        title: 'Map',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="my-location" size={30} color={tintColor} />;
        }
    };

    state = {
        mapLoaded: false,
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.03,
            latitudeDelta: 0.09
        }
    };

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    // func expression, passing as param to MapView
    onRegionChangeComplete = region => {
        this.setState({ region });
    };

    /*     // func declaration
    onRegionChangeComplete(region) {
        this.setState({ region });
    } */

    onButtonPress = () => {
        this.props.fetchJobs(() => {
            console.log('navigating to deck screen');
            this.props.navigation.navigate('deck');
        }, this.state.region);
    };

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    onRegionChangeComplete={this.onRegionChangeComplete}
                    style={{ flex: 1 }}
                    region={this.state.region}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Search this area"
                        large
                        backgroundColor="#009688"
                        icon={{ name: 'search' }}
                        onPress={this.onButtonPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
};

export default connect(
    null,
    actions
)(MapScreen);
