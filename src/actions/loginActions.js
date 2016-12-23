import * as types from '../constants/actionTypes';

export function updateFormData(login) {
  return function (dispatch) {
    dispatch({type: types.UPDATE_LOGIN_FORM, login});
  }
}
