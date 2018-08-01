import React, { Component } from 'react';
import { Card, CardSection, Button } from '../Components/common';
import { employeeUpdate, employeeCreate } from '../Actions';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentWillMount() {
        // initial state
        this.props.employeeUpdate({
            prop: 'name',
            value: ''
        });
        this.props.employeeUpdate({
            prop: 'phone',
            value: ''
        });
        this.props.employeeUpdate({
            prop: 'shift',
            value: 'Monday'
        });
    }

    onBtnPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
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

const mapDispatchToProps = { employeeCreate, employeeUpdate };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeCreate);
