import * as types from './actionTypes';
import { doAPICall } from '../config';

const getCityByKeyword = async (keyword) => {
	let p = new URLSearchParams();
	p.set('q',keyword);
	return doAPICall('weather',p);
}

const getCityById = async (id) => {
	let p = new URLSearchParams();
	p.set('id',id);
	return doAPICall('weather',p);
}

export const addCityStartAction = keyword => ({
	type:types.ADD_CITY_START,
	keyword
});

export const addCityFailAction = (keyword,e) => ({
	type:types.ADD_CITY_FAIL,
	keyword,
	error:`Failed to retrieve weather for ${keyword}`
})

export const addCityAction = city => ({
	type:types.ADD_CITY,
	city
})

export const updateCityStartAction = city => ({
	type:types.UPDATE_CITY_START,
	id:city.id,
})

export const updateCityFailAction = (city,e) => ({
	type:types.UPDATE_CITY_FAIL,
	id:city.id,
	error:`Failed to update weather for ${city.name}`
})

export const updateCityAction = city => ({
	type:types.UPDATE_CITY,
	city
})

export const removeCity = city => ({
	type:types.REMOVE_CITY,
	id:city.id
});

export const clearCities = () => ({
	type:types.CLEAR_CITIES	
});

export const updateCity = city => async dispatch => {
	try {
		dispatch(updateCityStartAction(city));
		let r = await getCityById(city.id);
		dispatch(updateCityAction(r))
	} catch(e) {
		dispatch(updateCityFailAction(city,e));
	}
}

export const addCity = keyword => async dispatch => {
	try {
		dispatch(addCityStartAction(keyword));
		let r = await getCityByKeyword(keyword);
		dispatch(addCityAction(r))
	} catch(e) {
		dispatch(addCityFailAction(keyword,e))
	}
}