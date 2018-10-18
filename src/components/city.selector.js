import React, { Component } from 'react';

export default class CitySelector extends Component { 

  state = {
    city:''
  };

  render()
  {
    return (
      <div className="city-selector">
        <input type="text" placeholder="Type city name" value={this.state.city} onChange={(e) => this.setState({city:e.target.value})}/>
        <button className="fa fa-plus" onClick={() => this.props.add(this.state.city)}></button>
      </div>
    )
  }
  
}
