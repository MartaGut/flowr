const initialStateUser = () => ({
    token: localStorage.getItem('token') || '',
    logged_user: {},
    sign_up: {},
    sign_out: {}
});

export default initialStateUser;