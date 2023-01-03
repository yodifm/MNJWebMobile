import { combineReducers } from "redux";
import {loginReducer, UserDataReducer, StockDataReducer}  from './auth'
import {globalReducer} from './global'

const reducer = combineReducers({loginReducer, globalReducer, UserDataReducer, StockDataReducer});


export default reducer;