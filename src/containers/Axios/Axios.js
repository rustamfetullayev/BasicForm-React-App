import axios from 'axios';

const current_server = axios.create({
    baseURL: 'https://react-form-app-78cee.firebaseio.com/'
})

export default current_server;