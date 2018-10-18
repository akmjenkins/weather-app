import * as types from '../actions/actionTypes';
import initialState from './initialState';
import citiesReducer from './cities';
import * as actions from '../actions/cities';
import { maxCities } from '../config';


describe('cities reducer',() => {

	it('should return initial state when an unknown action passed in',() => {
		expect(citiesReducer(initialState.cities,{type:null})).toBe(initialState.cities);
	})

	it('should only add a city with the same id once',() => {
		let city = {id:1};
		let cities = citiesReducer(initialState.cities,actions.addCityAction(city));
		citiesReducer(cities,actions.addCityAction(city));

		expect(cities.length).toBe(1);
	})

	it('should clear cities',() => {
		let cities = [1,2,3,4,5];
		expect(citiesReducer(cities,actions.clearCities()).length).toBe(0);
	})

	it('should remove a city',() => {
		let city1 = {id:1};
		let city2 = {id:2};
		let cities = [city1,city2];

		let nextCities = citiesReducer(cities,actions.removeCity(city1));
		expect(nextCities.length).toBe(1);
		expect(nextCities[0]).toBe(city2);
	});

	it('should add a city to the top',() => {
		let city1 = {id:1};
		let city2 = {id:2};
		let city3 = {id:3};
		let cities = [city1,city2];

		let nextCities = citiesReducer(cities,actions.addCityAction(city3));
		expect(nextCities[0]).toBe(city3);
	})

	it(`should not let the list grow longer than ${maxCities}`,() => {
		let cities = [];
		for( var i = 0; i <= maxCities+10; i++) {
			cities = citiesReducer(cities,actions.addCityAction({id:i}))
		}

		expect(cities.length).toBe(maxCities);
	});
})