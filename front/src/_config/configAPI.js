import axios from 'axios';

export default axios.create({
    baseURL : 'http://localhost:5001',
   // baseURL : 'http://68.183.111.209:3000/'
});