import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';
import loginReducer from './loginReducer';
import registerListReducer from'./registerListReducer';
const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer,
  registerList: registerListReducer
});

export default rootReducer;
