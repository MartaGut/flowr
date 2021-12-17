const initialStateUser = () => ({
    token: localStorage.getItem('token') || '',
    logged_user: {},
    sign_up: {},
});

export default initialStateUser;