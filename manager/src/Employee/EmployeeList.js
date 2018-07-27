import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../Actions';
import { ListItem } from './EmployeeListItem';
import { Card } from '../Components/common';

class EmployeeList extends Component {
    componentWillMount() {
        console.log('componentWillMount');
        console.dir(this.props);
        this.props.employeeFetch();
        this.createDataSource(this.props.employees);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps ' + nextProps);
        this.createDataSource(nextProps.employees);
    }

    createDataSource(employees) {
        console.log('createDataSource');
        console.dir(employees);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 != r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow(employee) {
        console.log('employee data');
        console.dir(employee);
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <Card>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </Card>
        );
    }
}

const mapStateToProps = state => {
    console.log('EmployeeList connect mapStateToProps');
    console.dir(state);
    const employees = _.map(state.employee_list, (val, uid) => {
        return { ...val, uid };
    });

    return { employees };
};

const mapDispatchToProps = { employeeFetch };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeList);
