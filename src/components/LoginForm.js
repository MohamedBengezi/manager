import React, { Component } from 'react';
import { Card, CardItem, Button, Input, Header, Spinner } from './common';
import { View, Text, SafeAreaView } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(pass) {
        this.props.passwordChanged(pass);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return (
                <Spinner size='large' />
            );
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)} >
                Login
            </Button>
        );
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    render() {
        return (
            <SafeAreaView>
                <Card>
                    <CardItem>
                        <Input
                            label="Email"
                            placeHolder="example@gmail.com"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardItem>

                    <CardItem>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeHolder="Password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardItem>

                    {this.renderError()}

                    <CardItem>
                        {this.renderButton()}
                    </CardItem>
                </Card>
            </SafeAreaView>
        );
    }
}

const styles = {
    formStyle: {
      
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);