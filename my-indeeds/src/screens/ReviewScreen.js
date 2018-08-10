import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { MapView } from 'expo';

class ReviewScreen extends Component {
    static navigationOptions = {
        title: 'Map',
        tabBarIcon: ({ tintColor }) => {
            return <Icon name="my-location" size={30} color={tintColor} />;
        }
    };

    componentWillMount() {
        console.log('componentWillMount: ' + this.props);
    }

    componentWillReceiveProps(nextProps) {
        console.log('nextProps: ' + nextProps);
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Review Jobs',
            headerRight: (
                <Button
                    title="Settings"
                    onPress={() => {
                        navigation.push('settings');
                    }}
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0,122,255,1)"
                />
            ),
            style: {
                marginTop: Platform.OS === 'android' ? 24 : 0
            }
        };
    };

    renderLikedJobs() {
        return this.props.jobs.map(job => {
            const initialRegion = {
                longitude: job.longitude,
                latitude: job.latitude,
                latitudeDelta: 0.045,
                longitudeDelta: 0.02
            };

            return (
                <Card key={job.jobkey} title={job.jobtitle}>
                    <View style={{ height: 300 }}>
                        <MapView
                            scrollEnabled={false}
                            style={{ flex: 1 }}
                            cacheEnabled={
                                Platform.OS === 'android' ? true : false
                            }
                            initialRegion={initialRegion}
                        />
                        <View style={styles.detailWrapper}>
                            <Text style={styles.italics}>{job.company}</Text>
                            <Text style={styles.italic}>
                                {job.formattedRelativeTime}
                            </Text>
                        </View>
                        <Button
                            style={{ marginTop: 10 }}
                            title="Apply Now!"
                            backgroundColor="#03A9F4"
                            onPress={() => {
                                Linking.openURL(job.url);
                            }}
                        />
                    </View>
                </Card>
            );
        });
    }

    render() {
        return <ScrollView>{this.renderLikedJobs()}</ScrollView>;
    }
}

const styles = {
    detailWrapper: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    italics: {
        fontStyle: 'italic'
    }
};

const mapStateToProps = state => {
    console.log('state is: ' + state);
    return { jobs: state.likedJobs };
};

export default connect(
    mapStateToProps,
    actions
)(ReviewScreen);
