import * as types from '../constants/actionTypes';
import * as registerListApi from "../apis/RegisterListApi";

export function loadRegisterListData(page) {
  return function (dispatch) {
    dispatch({type: types.BEGIN_LOAD_REGISTER_LIST_DATA});
    registerListApi.loadRegisterListData(page)
      .then(function (res) {
        dispatch({
          type: types.LOAD_REGISTER_LIST_DATA,
          registers: res.data.registers
        });
      });

  }
}
