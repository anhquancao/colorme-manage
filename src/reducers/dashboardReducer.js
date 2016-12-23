import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function dashboardReducer(state = initialState.dashboard, action) {

  switch (action.type) {
    case types.LOAD_DASHBOARD_DATA:
      return Object.assign({}, state,
        {registers_count: action.registers_count, total_money: action.total_money});
    default:
      return state;
  }
}
