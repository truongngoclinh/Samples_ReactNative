import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import DeckScreen from './src/screens/DeckScreen';
import MapScreen from './src/screens/MapScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import { PersistGate } from 'redux-persist/integration/react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';
import configurationStore from './src/store';
import { Icon } from 'react-native-elements';
import registerForNotifications from './src/services/push_notification';
import Expo, { Notifications } from 'expo';

export default class App extends React.Component {
    componentDidMount() {
        registerForNotifications();
        Notifications.addListener(notification => {
            console.log('received a notification');
            const {
                data: { text },
                origin
            } = notification;
            // const text =  notification.data.text;
            // alert('received a notification')
            if (origin === 'received' && text) {
                Alert.alert('New Push Notification', text, [{ text: 'Ok.' }]);
            }
        });
    }

    render() {
        const { persistor, store } = configurationStore();
        const MainNavigator = createBottomTabNavigator(
            {
                welcome: { screen: WelcomeScreen },
                auth: { screen: AuthScreen },
                main: {
                    screen: createBottomTabNavigator(
                        {
                            map: { screen: MapScreen },
                            deck: { screen: DeckScreen },
                            review: {
                                screen: createStackNavigator({
                                    review: { screen: ReviewScreen },
                                    settings: { screen: SettingsScreen }
                                }),
                                navigationOptions: {
                                    title: 'Review Jobs',
                                    tabBarIcon: ({ tintColor }) => {
                                        return (
                                            <Icon
                                                name="favorite"
                                                size={30}
                                                color={tintColor}
                                            />
                                        );
                                    }
                                }
                            }
                        },
                        {
                            tabBarOptions: {
                                labelStyle: { fontSize: 12 }
                            }
                        }
                    )
                }
            },
            {
                navigationOptions: {
                    tabBarVisible: false
                }
            },
            {
                lazyLoad: true
            }
        );

        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MainNavigator />
                </PersistGate>
            </Provider>
        );
    }
}
