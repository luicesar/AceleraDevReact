import Api from '../utils/api';
import { marvelApi } from '../config/config';

class CharacterService {
  static getCharacters(payload) {
    // const { publicKey, timeStamp, hash, limit, name } = payload;
    return Api.get(`v1/public/characters/1011334?apikey=${marvelApi.publicKey}`);
  }
}

export default CharacterService;
