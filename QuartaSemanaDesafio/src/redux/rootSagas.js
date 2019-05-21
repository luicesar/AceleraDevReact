/* Effects */
import { all, takeLatest } from 'redux-saga/effects';
import Types from './characters/types';
import { charactersSagas } from './characters/sagas';

export default function* rootSagas() {
  // yield all([...charactersSagas]);
  yield all([takeLatest(Types.LOAD_SUCCESS, charactersSagas)]);
}
