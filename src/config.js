export const apiKey = 'c51223c219d6aec8cb8c5210449bd859';

export const maxCities = 8;

export const doAPICall = async (endpoint,urlparams) => {
	let response = await fetch(`https://api.openweathermap.org/data/2.5/${endpoint}?${urlparams.toString()}&appId=${apiKey}&units=metric`);
	let json = await response.json();

	//weatherapi mixes 200 and "200" in responses
	if(+json.cod !== 200) {
		throw new Error(json.message || 'Request failed');
	}

	return json;
}

export const days = [
	'Sun',
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat'
];

export const weatherIcon = code => {
	return `http://openweathermap.org/img/w/${code}.png`;
}