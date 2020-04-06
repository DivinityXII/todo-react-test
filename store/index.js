import { combineReducers } from 'redux'
import SomeReducer from './someState/reducer';
import MeReducer from './me/reducer';

const AppReducer = combineReducers({
	SomeReducer,
	MeReducer
})


export default AppReducer;