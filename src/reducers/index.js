import { combineReducers } from 'redux';
import StationsReducer from './reducer_stations.js';

const rootReducer = combineReducers({
	stations: StationsReducer
});

export default rootReducer;
