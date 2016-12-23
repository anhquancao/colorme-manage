import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function dashboardReducer(state = initialState.dashboard, action) {

  switch (action.type) {
    case types.BEGIN_LOAD_DASHBOARD_DATA:
      return Object.assign({}, state, {
        isLoading: true
      });
    case types.LOAD_DASHBOARD_DATA:
      return Object.assign({}, state,
        {
          isLoading: false,
          registers_count: action.registers_count,
          total_money: action.total_money,
          registers_number: action.registers_number,
          paid_number: action.paid_number,
          remain_days: action.remain_days
        });
    default:
      return state;
  }
}
