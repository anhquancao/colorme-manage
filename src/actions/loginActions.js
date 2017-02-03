import * as types from '../constants/actionTypes';
import * as loadLoginApi from '../apis/LoginApi';

export function beginUpdateLoginForm() {
  return {type: types.BEGIN_UPDATE_LOGIN_FORM};
}

export function updateFormData(login) {
  return function (dispatch) {
    dispatch(beginUpdateLoginForm());
    loadLoginApi.loadLoginApi(login).then(function (res) {
      dispatch(updatedLoginForm(res));
    })
  };
}

export function updatedLoginForm(res) {
  localStorage.setItem('token', res.data.token);
  console.log("success");
  return ({
    type: types.UPDATED_LOGIN_FORM,
    token: res.data.token,
    user: res.data.user
  })
}
