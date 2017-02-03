import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {

  switch (action.type) {
    case types.BEGIN_UPDATE_LOGIN_FORM:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.UPDATED_LOGIN_FORM:
      return Object.assign({}, state, {
        token: action.token,
        isLoading: false
      });
    default:
      return state;
  }
}
