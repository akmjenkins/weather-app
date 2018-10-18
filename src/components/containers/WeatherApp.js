import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from './City';
import Forecast from './Forecast';

class WeatherApp extends Component {

  state = {
    city:null
  };

  /* 
    Assumption: Don't clear the ForecastContainer when the list is cleared
    For this reason, we need to reconcile the city that is maintained
    in this component's state whenever this.props.cities is updated - see componentDidUpdate method
  */
  selectCity = (city) => {
    this.setState({city})
  };

  componentDidUpdate(prevProps,prevState)
  {

    let newCity;
    if(
      this.state.city && 
      this.props.cities !== prevProps.cities
    ) {
      (newCity = this.props.cities.find(city => city.id === this.state.city.id)) && this.selectCity(newCity)
    }

  }

  render() {

    return (
      <div className="weather-app">
        <City
          cities={this.props.cities}
          select={this.selectCity}
          selected={this.state.city}
        />

        <Forecast
          city={this.state.city}
        />

      </div>
    );

  }
}

const mapStateToProps = (state, ownProps) => ({ cities: state.cities });
const WeatherAppContainer = connect(mapStateToProps, null)(WeatherApp);
export default WeatherAppContainer;