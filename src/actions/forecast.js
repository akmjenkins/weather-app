import * as types from './actionTypes';
import { doAPICall } from '../config';

const retrieveForecast = async (id) => {
	let p = new URLSearchParams();
	p.set('id',id);
	p.set('cnt',5);
	return doAPICall('forecast/daily',p)
};

const getForecastAction = forecast => ({
	type:types.FORECAST_RETRIEVE,
	forecast:forecast
});

const getForecastStartAction = city => ({
	type:types.FORECAST_RETRIEVE_START,
	id:city.id
});

const getForecastFailAction = (city,e) => ({
	type:types.FORECAST_RETRIEVE_FAIL,
	id:city.id,
	error:`Failed to retrieve forecast for ${city.name}`
});

export const getForecast = city => async dispatch => {
	try {
		dispatch(getForecastStartAction(city));
		let r = await retrieveForecast(city.id);
		dispatch(getForecastAction(r))
	} catch(e) {
		dispatch(getForecastFailAction(city,e));
	}
}