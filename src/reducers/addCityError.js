import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.addCityError, action) => {
	switch(action.type) {

		case types.ADD_CITY_FAIL:
			return action.error

		default:
			return state;

	}
};