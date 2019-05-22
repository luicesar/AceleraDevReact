import { call, put, select } from 'redux-saga/effects';
import md5 from 'js-md5';
import Api from '../../services/characters';
import { marvelApi } from '../../config/config';
import Api2 from '../../utils/api';
import { Creators as CharactersActions } from './reducer';

export function* charactersSagas(action) {
  const timestamp = Number(new Date());
  const hash = md5.create().update(timestamp + marvelApi.privateKey + marvelApi.publicKey);
  const urlSecurity = `?ts=${timestamp}&apikey=${marvelApi.publicKey}&hash=${hash.hex()}`;

  try {
    // const { data } = yield call(Api2.get, `v1/public/characters/${action.payload.repository}`);
    // const { data } = yield call(Api2.get, `/v1/public/characters/1011334${urlSecurity}`);
    const { data } = yield Api.getCharacters();
    // const exists = yield select(state =>
    //   state.characters.data.results.find(character => character.id !== data.results.id)
    // );

    // const exists = data.results.length;

    // if (exists > 0) {
    //   yield put(CharactersActions.loadCharacterSuccess(data));
    // }

    console.log('sagas data.results: ', data.data.results);

    yield put(CharactersActions.loadCharacterSuccess(data.data.results));
  } catch (error) {
    yield put(CharactersActions.loadCharacterFailure('Error carregar os dados'));
  }
}
