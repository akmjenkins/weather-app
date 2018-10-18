import { combineReducers } from 'redux';
import cities from './cities';
import addCityError from './addCityError';
import forecast from './forecast';

export default combineReducers({ 
	cities, 
	addCityError,
	forecast
});