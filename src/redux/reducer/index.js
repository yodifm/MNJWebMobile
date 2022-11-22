import { combineReducers } from "redux";
import {loginReducer}  from './auth'
import {globalReducer} from './global'

const reducer = combineReducers({loginReducer, globalReducer});


export default reducer;