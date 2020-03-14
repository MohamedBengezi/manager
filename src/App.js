import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import LoginForm from './components/LoginForm';
import reducers from './reducers'
import firebase from 'firebase';
import Router from './router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDzstADUrtQKQpiZTHxOGCDudmYCRfl3qA",
            authDomain: "manager-3a1df.firebaseapp.com",
            databaseURL: "https://manager-3a1df.firebaseio.com",
            projectId: "manager-3a1df",
            storageBucket: "manager-3a1df.appspot.com",
            messagingSenderId: "218851195116"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;