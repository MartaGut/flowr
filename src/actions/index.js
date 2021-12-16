import { FETCH_FLOWERS, LOGIN, LOGGED_USER_INFO, SIGN_OUT, SIGN_UP } from "./types";
import axios from '../apis/apis';

export const fetchFLowers = () => async dispatch => {
    const response = await axios.get('/flowers');

    console.log('cvece:' + response.data);

    dispatch({
        type: FETCH_FLOWERS,
        payload: response.data.flowers
    });
}

export const signUp = (user, setModalOpenRegSuccess) => async dispatch => {
    const response = await axios.post('/users/register', user);

    console.log(response)

    dispatch({
        type: SIGN_UP,
        payload: response.data
    });

    setModalOpenRegSuccess(true);
}

export const logIn = (email, password, setModalOpenSuccess) => async dispatch => {
    const response = await axios.post('/users/login', { email, password });
    console.log(response);

    localStorage.setItem("token", response.data.auth_token);

    dispatch({
        type: LOGIN,
        payload: response.data.auth_token
    });

    setModalOpenSuccess(true);
}

export const loggedUserInfo = (token) => async dispatch => {
    const response = await axios.get('/users/me', {
        headers: { "Authorization": `Bearer ${token}` }
    });

    dispatch({
        type: LOGGED_USER_INFO,
        payload: response.data.user
    })
}

export const signOut = () => async dispatch => {

    dispatch({
        type: SIGN_OUT
    });
};