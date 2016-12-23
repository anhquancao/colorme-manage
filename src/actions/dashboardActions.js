import * as types from '../constants/actionTypes';
export function loadDashboardData() {
  return function (dispatch) {
    dispatch({type: types.LOAD_DASHBOARD_DATA, registers_count: 20, total_money: 1000});
  }
}
