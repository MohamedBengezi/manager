import React, { Component } from 'react';
import { View, Text, SafeAreaView, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardItem, Input, Button } from './common';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var pickerDays = []

class EmployeeCreate extends Component {

    createPickerItems(days) {
        pickerDays = []
        for (var i = 0; i < days.length; i++) {
            pickerDays.push(
                <Picker.Item key={i} label={days[i]} value={days[i]} ></Picker.Item>
            )
        }
        console.log(pickerDays.length)
        return pickerDays;
    }

    onCreatePress() {
        const { name, phone, shift } = this.props;

        this.props.employeeCreate({name, phone, shift});
    }

    render() {
        return (
            <SafeAreaView>
                <Card>
                    <CardItem>
                        <Input
                            label="Name"
                            placeHolder="John Doe"
                            value={this.props.name}
                            onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                        />
                    </CardItem>

                    <CardItem>
                        <Input
                            label="Phone"
                            placeHolder="111-111-1111"
                            value={this.props.phone}
                            onChangeText={phone => this.props.employeeUpdate({ prop: 'phone', value: phone })}
                        />
                    </CardItem>

                    <CardItem style={{ flexDirection: "column" }}>

                        <Text style={styles.pickerLabelStyle}>
                            Shift
                        </Text>

                        <View style={styles.pickerViewStyle}>
                            <Picker
                                style={{ flex: 1 }}
                                selectedValue={this.props.shift}
                                onValueChange={day => this.props.employeeUpdate({ prop: 'shift', value: day })}>
                                {this.createPickerItems(days)}
                            </Picker>
                        </View>
                    </CardItem>


                    <CardItem>
                        <Button onPress={this.onCreatePress.bind(this)} >
                            Create
                        </Button>
                    </CardItem>

                </Card>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}


const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20
    },
    pickerViewStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
        paddingLeft: 15,
        paddingRight: 15
    }

}
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);