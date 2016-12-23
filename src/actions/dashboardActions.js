import * as types from '../constants/actionTypes';
import * as dashboardApi from "../apis/DashboardApi";
import * as helper from '../helpers/helper';

export function loadDashboardData(genId) {
  return function (dispatch) {
    dispatch({type: types.BEGIN_LOAD_DASHBOARD_DATA});
    dashboardApi.loadDashboardData(genId)
      .then(function (res) {
        const totalMoney = helper.numberWithCommas(res.data.total_money/1000);
        dispatch({
          type: types.LOAD_DASHBOARD_DATA,
          registers_count: 20,
          total_money: totalMoney,
          registers_number: res.data.register_number,
          paid_number: res.data.paid_number,
          remain_days: res.data.remain_days

        });
      });

  }
}
