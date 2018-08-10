import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderLastSlide(i) {
        if (i == this.props.data.length - 1) {
            return (
                <Button
                    title="Onboarding!"
                    buttonStyle={styles.button}
                    onPress={this.props.onBoarding}
                />
            );
        }
    }

    renderSlide() {
        return this.props.data.map((item, i) => {
            return (
                <View
                    key={item.text}
                    style={[styles.slide, { backgroundColor: item.color }]}
                >
                    <Text style={styles.slideText}>{item.text}</Text>
                    {this.renderLastSlide(i)}
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
                {this.renderSlide()}
            </ScrollView>
        );
    }
}

const styles = {
    slide: {
        flex: 1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideText: {
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 24
    },
    button: {
        backgroundColor: '#0288D1',
        marginTop: 15,
        opacity: 0.8
    }
};

export default Slides;
