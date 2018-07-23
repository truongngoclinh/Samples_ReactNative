import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from './actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDesc() {
        const { descStyle } = styles;
        const { library, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={descStyle}>{library.description}</Text>;
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title, desc } = this.props.library;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDesc()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    descStyle: {
        flex: 1,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#ff1122'
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.library.id == state.selectedLibraryId;
    return { expanded };
};

export default connect(
    mapStateToProps,
    actions
)(ListItem);
