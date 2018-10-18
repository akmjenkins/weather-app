import React, { Component } from 'react';
import City from './city';

export default class CityList extends Component {

  render()
  {
  	return (
  		<div className="city-list">

  			<div>
	  			<div className="city-list-header">Recent Locations:</div>

	  			{this.props.cities.map(city => (
            <City 
              key={city.id} 
              isSelected={city === this.props.selected}
              refresh={this.props.refresh.bind(this,city)} 
              remove={this.props.remove.bind(this,city)} 
              select={this.props.select.bind(this,city)}
              city={city}/>
            ))}
  			</div>

  			<button className="city-list-clear" onClick={this.props.clear}>Clear</button>
  		</div>
  	)
  }
}