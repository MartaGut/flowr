import { LOGGED_USER_INFO, LOGIN, SIGN_OUT, SIGN_UP } from "../actions/types";
import initialStateUser from "../actions/initialStateUser";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialStateUser(), action) => {
    switch (action.type) {
        case SIGN_UP:
            return { ...state, sign_up: action.payload };
        case LOGIN:
            return { ...state, token: action.payload };
        case LOGGED_USER_INFO:
            return { ...state, logged_user: action.payload };
        case SIGN_OUT:
            localStorage.removeItem('token');
            return { ...state, token: '' };
        default:
            return state;
    };
};