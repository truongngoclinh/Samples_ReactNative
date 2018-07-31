import React, { Component } from 'react';
import { Card, CardSection, Button } from '../Components/common';
import { employeeUpdate, employeeCreate } from '../Actions';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';

class EmployeeUpdate extends Component {
    componentWillMount() {
        console.dir(this.props.employee);
        /*       if (this.props.employee) {
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
        } */
    }

    onBtnPress() {
        console.log('name: ' + name);
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                {/* <EmployeeForm {...this.props}> */}
                <EmployeeForm />
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

const mapDispatchToProps = { /* employeeUpdate, */ employeeCreate };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeUpdate);
