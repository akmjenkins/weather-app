import React, { Component } from 'react';
import { days, weatherIcon } from '../config';


export default class ForecastItem extends Component {

	render()
	{

		let now = new Date(this.props.dt*1000);

		return (
			<div className="forecast-item">
				<div className="forecast-item-date">
					{now.getDate()}<br/>
					{days[now.getDay()]}
				</div>

				<img alt={this.props.weather[0].description} src={weatherIcon(this.props.weather[0].icon)}/>

				<div className="forecast-item-temp">
					{Math.round(this.props.temp.day)}<sup>o</sup>C
				</div>
			</div>
		)
	}

}