import React, { Component } from 'react';
import { Card, CardSection, Button, ConfirmDialog } from '../Components/common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../Actions';
import _ from 'lodash';
import Communications from 'react-native-communications';
import { Actions } from 'react-native-router-flux';

export class EmployeeEdit extends Component {
    state = { showModal: false };

    componentWillMount() {
        console.log('componentWillMount()');
        console.dir(this.props);
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps()');
        console.dir(nextProps);
        if (nextProps.deleted === '1') {
            this.onDecline(1);
        }
    }

    onBtnPress() {
        const { name, phone, shift } = this.props;
        const uid = this.props.employee.uid;
        console.log(name, phone, shift);
        this.props.employeeSave({
            name,
            phone,
            shift,
            uid
        });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onDelete() {
        this.setState({ showModal: !this.state.showModal });
    }

    onAccept() {
        const uid = this.props.employee.uid;
        console.log(`uid? ${uid}`);
        this.props.employeeDelete({ uid });
    }

    onDecline(exit) {
        this.setState({ showModal: false });

        if (exit == 1) {
            Actions.pop();
        }
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onBtnClick={this.onBtnPress.bind(this)}>
                        Save changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onBtnClick={this.onTextPress.bind(this)}>
                        Text
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onBtnClick={this.onDelete.bind(this)}>Fire</Button>
                </CardSection>

                <ConfirmDialog
                    visible={this.state.showModal}
                    title="Fire employee"
                    desc="
                    Are you sure you want to delete this?"
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                />
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift, deleted } = state.employee;
    return { name, phone, shift, deleted };
};

const mapDispatchToProps = { employeeUpdate, employeeSave, employeeDelete };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeEdit);
