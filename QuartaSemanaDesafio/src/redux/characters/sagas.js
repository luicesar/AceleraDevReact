import { call, put, select } from 'redux-saga/effects';
import Api from '../../services/characters';
import { marvelApi } from '../../config/config';
import Api2 from '../../utils/api';
import { Creators as CharactersActions } from './reducer';

export function* charactersSagas(action) {
  try {
    // const { data } = yield call(Api2.get, `v1/public/characters/${action.payload.repository}`);
    const { data } = yield call(
      Api2.get,
      `v1/public/characters/1011334?apikey=${marvelApi.publicKey}`
    );
    console.log('Dentro do Saga');

    yield put(CharactersActions.loadCharacterSuccess(data));
  } catch (error) {
    yield put(CharactersActions.loadCharacterFailure('Error carregar os dados'));
  }
}
