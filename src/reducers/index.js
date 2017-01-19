import {combineReducers} from 'redux';
import dashboardReducer from './dashboardReducer';
import loginReducer from './loginReducer';
import registerListReducer from'./registerListReducer';
import genListReducer from'./genListReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  login: loginReducer,
  registerList: registerListReducer,
  genList: genListReducer
});

export default rootReducer;
