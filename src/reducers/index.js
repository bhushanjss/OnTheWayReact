import { combineReducers } from 'redux';
import StationsReducer from './reducer_stations';
import CurrentStation from './reducer_current_station';

const rootReducer = combineReducers({
	stations: StationsReducer,
	currentStation: CurrentStation
});

export default rootReducer;
