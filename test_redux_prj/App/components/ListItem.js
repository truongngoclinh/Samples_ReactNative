import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        // console.dir(`props: ${this.props.library}`);
        // console.log(this.props.library)
        const { titleStyle } = styles;
        const { title, desc } = this.props.library;
        console.log(title);
        return (
            <CardSection>
                <Text style={titleStyle}>{title}</Text>
            </CardSection>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default ListItem;
