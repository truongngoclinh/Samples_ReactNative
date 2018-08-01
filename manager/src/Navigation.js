import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import LoginForm from './Login/LoginForm';
import EmployeeList from './Employee/EmployeeList';
import EmployeeCreate from './Employee/EmployeeCreate';
import EmployeeEdit from './Employee/EmployeeEdit';

export default (RouterComponent = () => {
    const path = type => {
        if (type === 'back') {
            return require('../assets/images/icon_nav_back.png');
        } else {
            return require('../assets/images/icon_nav_add.png');
        }
    };

    const onPress = type => {
        console.log(type);
        if (type == 'back') {
            return Actions.pop();
        } else if (type == 'employee_create') {
            return Actions.employee_create();
        }
    };

    const renderButton = type => {
        return (
            <TouchableOpacity onPress={() => onPress(type)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{
                            width: 25,
                            height: 25,
                            marginLeft: 10,
                            marginRight: 10
                        }}
                        source={path(type)}
                        resizeMode={'contain'}
                    />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene
                        key="login"
                        component={LoginForm}
                        title="Login"
                        initial
                    />
                </Scene>
                <Scene key="main">
                    <Scene
                        renderRightButton={() =>
                            renderButton('employee_create')
                        }
                        component={EmployeeList}
                        title="Employee List"
                        key="employee_list"
                    />
                    <Scene
                        renderLeftButton={() => renderButton('back')}
                        key="employee_create"
                        component={EmployeeCreate}
                        title="Employee create"
                    />
                    <Scene
                        key="employee_edit"
                        component={EmployeeEdit}
                        title="Employee Edit"
                        renderLeftButton={() => renderButton('back')}
                    />
                </Scene>
            </Scene>
        </Router>
    );
});
