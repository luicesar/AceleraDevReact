import md5 from 'js-md5';
import Api from '../utils/api';
import { marvelApi } from '../config/config';

class CharacterService {
  static getCharacters(payload) {
    // const { publicKey, timeStamp, hash, limit, name } = payload;

    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + marvelApi.privateKey + marvelApi.publicKey);
    const urlSecurity = `?ts=${timestamp}&apikey=${marvelApi.publicKey}&hash=${hash.hex()}`;

    console.log('API Characters: ', `v1/public/characters/1011334${urlSecurity}`);
    return Api.get(`v1/public/characters/1011334${urlSecurity}`);
  }
}

export default CharacterService;
