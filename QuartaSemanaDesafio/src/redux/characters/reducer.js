import Types from './types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null
};

export default function characters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data]
      };
    case Types.LOAD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  loadCharacterRequest: repository => ({
    type: Types.LOAD_REQUEST,
    payload: { repository }
  }),

  loadCharacterSuccess: data => ({
    type: Types.LOAD_SUCCESS,
    payload: { data }
  }),

  loadCharacterFailure: error => ({
    type: Types.LOAD_FAILURE,
    payload: { error }
  })
};
