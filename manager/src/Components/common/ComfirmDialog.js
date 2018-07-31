import React from 'react';
import { Text, View, Modal, Dimensions } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const screenWidth = Dimensions.get('window').width;

const ConfirmDialog = ({ title, desc, visible, onAccept, onDecline }) => {
    const {
        titleStyle,
        descStyle,
        cardSectionStyle,
        buttonStyle,
        containerStyle
    } = styles;
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={titleStyle}>{title}</Text>
                    <Text style={descStyle}>{desc}</Text>
                    <View style={buttonStyle}>
                        <Button onBtnClick={onAccept}>Yes</Button>
                        <Button onBtnClick={onDecline}>No</Button>
                    </View>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
        flexDirection: 'column',
        height: 200,
        borderRadius: 4
    },
    titleStyle: {
        flex: 1,
        fontSize: 18,
        color: 'blue',
        textAlign: 'left',
        paddingLeft: 10,
        lineHeight: 40
    },
    descStyle: {
        flex: 1.5,
        fontSize: 18,
        textAlign: 'left',
        paddingRight: 10,
        paddingLeft: 10,
        lineHeight: 40
    },
    buttonStyle: {
        flexDirection: 'row'
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        flex: 1,
        // width: screenWidth * 0.9,
        // height: 240,
        justifyContent: 'center',
        padding: 20,
        alignItems: 'center'
    }
};

export { ConfirmDialog };
