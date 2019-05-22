import axios from 'axios';
import { marvelApi } from '../config/config';

const BASE_URL = 'https://gateway.marvel.com:443';
const teste_URL = '';
class Api {
  static get(uri) {
    this.teste_URL = `${BASE_URL}${uri}`;
    return axios.get(`${BASE_URL}${uri}`);
  }
}

console.log('API UTIL: ', `${BASE_URL}${teste_URL}`);

const Api2 = axios.create({
  baseURL: BASE_URL
});

export default (Api, Api2);
