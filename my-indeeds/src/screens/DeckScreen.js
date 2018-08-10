import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Platform } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import Deck from '../components/deck/Deck';
import { Card, Button, Tile, Icon } from 'react-native-elements';
import * as actions from '../actions';

class DeckScreen extends Component {
    static navigationOptions = {
        title: 'Jobs',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="description" size={30} color={tintColor} />;
        }
    };

    renderCard = job => {
        const initialRegion = {
            longitude: job.longitude,
            latitude: job.latitude,
            latitudeDelta: 0.045,
            longitudeDelta: 0.02
        };
        return (
            <Card title={job.jobtitle}>
                <View style={{ height: 300 }}>
                    <MapView
                        scrollEnabled={false}
                        style={{ flex: 1 }}
                        cacheEnabled={Platform.OS === 'android' ? true : false}
                        initialRegion={initialRegion}
                    />
                </View>
                <View style={styles.detailWrapper}>
                    <Text>{job.company}</Text>
                    <Text>{job.formattedRelativeTime}</Text>
                </View>
                <Text numberOfLines={4}>{job.snippet}</Text>
            </Card>
        );
    };

    onSwipeRight = job => {
        console.log(this.props);
        this.props.likeJob(job);
    };
    onSwipeLeft = job => {
        this.props.dislikeJob(job);
    };

    // deck callback
    renderNoMoreCards() {
        return (
            <Card title="All Done!">
                <Text style={{ marginBottom: 10 }}>
                    There's no more content here!
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('map')}
                    title="Get more!"
                    backgroundColor="#03a9f4"
                />
            </Card>
        );
    }

    render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Deck
                    data={this.props.jobs}
                    onSwipeLeft={this.onSwipeLeft}
                    onSwipeRight={this.onSwipeRight}
                    renderCard={this.renderCard}
                    renderNoMoreCards={this.renderNoMoreCards.bind(this)}
                    keyProp="jobkey"
                />
            </View>
        );
    }
}

const styles = {
    detailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 10
    }
};

const mapStateToProps = ({ jobs }) => {
    if (jobs.results) {
        return { jobs: jobs.results };
    } else {
        return { jobs: [] };
    }
};

export default connect(
    mapStateToProps,
    actions
)(DeckScreen);
