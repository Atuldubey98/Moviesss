import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '747e4d8790bd111419e88605ca28440c',
  },
});

export default instance;
