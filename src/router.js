import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Navigator } from 'react-native-deprecated-custom-components';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    console.log('in router.js ');
    return (
        <Router sceneStyle={styles.sceneStyle}>
            <Scene key="root">
                <Scene key="login" component={LoginForm} title='Login' sceneStyle={styles.sceneStyle} initial />
                <Scene 
                rightTitle="Add" 
                onRight={() => Actions.employeeCreate() } 
                key="employeeList" 
                component={EmployeeList} 
                title='Employees' 
                sceneStyle={styles.sceneStyle} 
                />
                <Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" sceneStyle={styles.sceneStyle}  />
            </Scene>
        </Router>
    );
}

const styles = {
    sceneStyle: {
        paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight
    }
}

export default RouterComponent;