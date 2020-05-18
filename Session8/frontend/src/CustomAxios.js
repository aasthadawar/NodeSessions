import axios from 'axios';
let instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'x-access-token': localStorage.getItem('token') },
});
export default instance;