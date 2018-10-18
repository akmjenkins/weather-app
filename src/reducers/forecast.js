import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default (state = initialState.forecast, action) => {

	switch(action.type) {

		case types.FORECAST_RETRIEVE:
			return action.forecast;

		case types.FORECAST_RETRIEVE_START:
			return Object.assign(
				{},
				state,
				{
					isFetching:true,
					error:null,
					list:[]
				}
			);

		case types.FORECAST_RETRIEVE_FAIL:
			return Object.assign(
				{},
				state,
				{
					isFetching:false,
					error:action.error || 'Fail',
					list:[]
				}
			);

		default:
			return state;
			
	}
}