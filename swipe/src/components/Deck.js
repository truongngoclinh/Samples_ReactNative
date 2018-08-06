import React, { Component } from 'react';
import {
    View,
    Animated,
    PanResponder,
    Dimensions,
    LayoutAnimation,
    UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.3 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 500;

class Deck extends Component {
    static defaultProps = {
        onSwipeLeft: () => {},
        onSwipeRight: () => {}
    };

    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            // user tap on screen
            onStartShouldSetPanResponder: () => true,

            // drag finger around screen
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy });
            },

            // release finger
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    this.forceSwipe('right');
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    this.forceSwipe('left');
                } else {
                    this.resetPosition();
                }
            }
        });

        this.state = { panResponder, position, index: 0 };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data !== this.props.data) {
            this.setState({ index: 0 });
        }
    }

    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental &&
            UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    forceSwipe(direction) {
        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
        Animated.timing(this.state.position, {
            toValue: { x, y: 0 },
            duration: SWIPE_OUT_DURATION
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction) {
        console.log('onSwipeComplete()');
        console.dir(this.props);
        console.dir(this.state);
        const { onSwipeLeft, onSwipeRight, data } = this.props;
        const item = data[this.state.index];

        direction == 'right' ? onSwipeRight(item) : onSwipeLeft(item);
        this.state.position.setValue({ x: 0, y: 0 });

        console.log('update state index');
        this.setState({ index: this.state.index + 1 });
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0 }
        }).start();
    }

    getCardStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']
        });

        return {
            ...this.state.position.getLayout(),
            transform: [{ rotate }]
        };
    }

    renderCards() {
        console.log('trigger renderCards()');
        if (this.state.index >= this.props.data.length) {
            console.log('trigger renderNoMoreCards()');
            return this.props.renderNoMoreCards();
        }

        return this.props.data
            .map((item, index) => {
                const currentSwipeIndex = this.state.index;
                if (index < currentSwipeIndex) {
                    return null;
                } else if (index === currentSwipeIndex) {
                    return (
                        <Animated.View
                            key={item.id}
                            style={[this.getCardStyle(), styles.cardStyle]}
                            {...this.state.panResponder.panHandlers}
                            // style={this.getCardStyle()}
                        >
                            {this.props.renderCard(item)}
                        </Animated.View>
                    );
                } else {
                    return (
                        <Animated.View
                            key={item.id}
                            style={[
                                styles.cardStyle,
                                { top: 10 * (index - this.state.index) }
                                // { top: 10 * index}
                            ]}
                        >
                            {this.props.renderCard(item)}
                        </Animated.View>
                    );
                }
            })
            .reverse();
    }

    render() {
        return <View>{this.renderCards()}</View>;
    }
}

const styles = {
    cardStyle: {
        position: 'absolute',
        // left: 0,
        // right: 0
        width: SCREEN_WIDTH
    }
};

export default Deck;
