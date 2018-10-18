import * as types from '../actions/actionTypes';
import initialState from './initialState';
import * as config from '../config';

export default (cities = initialState.cities, action) => {

	switch(action.type) {


		case types.ADD_CITY:

			//don't add a city twice
			if(cities.some(city => city.id === action.city.id)) { return cities; }

			//only allow 8 cities
			return [action.city].concat(cities.length < config.maxCities ? cities : cities.slice(0,-1))

		case types.UPDATE_CITY_START:
			{
				let cityIdx = cities.findIndex((city) => city.id === action.id);
				if(cityIdx === -1) { return cities; }
				let c = cities.slice();

				c.splice(
					cityIdx,
					1,
					Object.assign(
						{},
						cities[cityIdx],
						{
							isFetching:true,
							error:null
						}
					)
				);


				return c;
			}


		case types.UPDATE_CITY_FAIL:
			{
				let cityIdx = cities.findIndex((city) => city.id === action.id);
				if(cityIdx === -1) { return cities; }
				let c = cities.slice();

				c.splice(
					cityIdx,
					1,
					Object.assign(
						{},
						cities[cityIdx],
						{
							isFetching:false,
							error:action.error
						}
					)
				);

				return c;
			}

		case types.UPDATE_CITY:
			{
				let idx = cities.findIndex(city => city.id === action.city.id);
				let c = cities.slice();
				c.splice(idx,1,action.city);
				return c;
			}

		case types.REMOVE_CITY:
			return cities.filter(city => city.id !== action.id);

		case types.CLEAR_CITIES:
			return [];

		default:
			return cities;
	}
};