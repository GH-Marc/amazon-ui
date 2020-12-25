import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001/ui-1d15d/us-central1/api'
});

export default instance;