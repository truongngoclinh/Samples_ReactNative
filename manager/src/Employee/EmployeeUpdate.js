import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from '../Components/common';
import { Picker, Text } from 'react-native';
import { employeeUpdate, employeeCreate } from '../Actions';
import { connect } from 'react-redux';

class EmployeeUpdate extends Component {
    componentWillMount() {
        console.dir(this.props.employee);
        if (this.props.employee) {
            this.props.employeeUpdate({
                prop: 'name',
                value: this.props.employee.name
            });
            this.props.employeeUpdate({
                prop: 'phone',
                value: this.props.employee.phone
            });
            this.props.employeeUpdate({
                prop: 'shift',
                value: this.props.employee.shift
            });
        }
    }

    onBtnPress() {
        console.log('name: ' + name);
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        onChangeText={text =>
                            this.props.employeeUpdate({
                                prop: 'name',
                                value: text
                            })
                        }
                        label="Name"
                        placeHolder="Linh"
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
                        placeHolder="975439489"
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
                <CardSection>
                    <Button onBtnClick={this.onBtnPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
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
    const { name, phone, shift } = state.employee;
    return {
        name: name,
        phone: phone,
        shift: shift
    };
};

const mapDispatchToProps = { employeeUpdate, employeeCreate };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeUpdate);
