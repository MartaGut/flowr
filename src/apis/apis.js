import axios from 'axios';

export default axios.create({
    baseURL: 'https://flowrspot-api.herokuapp.com/api/v1/'
})