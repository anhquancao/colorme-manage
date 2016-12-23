import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {

  switch (action.type) {
    case types.UPDATE_LOGIN_FORM:
      return Object.assign({}, state, action.login);
    default:
      return state;
  }
}
