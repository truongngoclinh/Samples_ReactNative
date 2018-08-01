import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardSection, Input } from '../Components/common';
import { connect } from 'react-redux';
import { employeeUpdate } from '../Actions';

class EmployeeForm extends Component {
    componentWillMount() {
        console.log('Employeeform props');
        console.dir(this.props);
    }

    render() {
        return (
            <View>
                <CardSection>
                    <Input
                        onChangeText={text =>
                            this.props.employeeUpdate({
                                prop: 'name',
                                value: text
                            })
                        }
                        label="Name"
                        placeHolder="name"
                        value={this.props.name}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        onChangeText={value =>
                            this.props.employeeUpdate({
                                prop: 'phone',
                                value //es6 trick
                            })
                        }
                        label="Phone"
                        placeHolder="phone"
                        value={this.props.phone}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={styles.pickerStyle}
                        selectedValue={this.props.shift}
                        onValueChange={text =>
                            this.props.employeeUpdate({
                                prop: 'shift',
                                value: text
                            })
                        }
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 5
    },
    pickerStyle: {
        // flex: 1
    }
};

const mapStateToProps = state => {
    const { name, phone, shift, created } = state.employee;
    return {
        name: name,
        phone: phone,
        shift: shift,
        created: created
    };
};

const mapDispatchToProps = { employeeUpdate };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeForm);
