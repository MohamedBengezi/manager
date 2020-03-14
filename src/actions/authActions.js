import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_FAIL, 
    CREATE_USER, 
    LOGIN_USER
} from '../actions/types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => { loginUserSuccess(dispatch, user)})
            .catch((error) => { 
                console.log(error);
                mustCreateUser(dispatch);
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => { loginUserSuccess(dispatch, user)})
                .catch(() => loginUserFail(dispatch));
            })
    };
};

const mustCreateUser = (dispatch) => {
    dispatch({ type: CREATE_USER });
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    Actions.employeeList();
    console.log('Going to employeeList');
}

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL})
}