import axios from 'axios';
let instance = axios.create({
  'Cache-Control': 'no-cache',
  headers: { 'x-access-token': localStorage.getItem('token') },
});
export default instance;

