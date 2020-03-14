import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';


class EmployeeList extends Component {

    render() {
        console.log('in employee list');
        return (
            <SafeAreaView>
                    <Text> Employee List </Text>
                    <Text> Employee List 1</Text>
                    <Text> Employee List 2</Text>
                    <Text> Employee List 3</Text>
            </SafeAreaView>
        );
    }
}

export default EmployeeList;
