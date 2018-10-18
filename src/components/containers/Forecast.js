import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getForecast } from '../../actions/forecast';
import { weatherIcon } from '../../config';
import ForecastItem from '../forecast.item';

export class Forecast extends Component {

  componentDidUpdate(prevProps,prevState)
  {
    
    /*
      if there is a current city and 
        a) there was no previous city or 
        b) it's id is not the same as this.props.city

        then update the forcast
    */
    if(this.props.city && (!prevProps.city || prevProps.city.id !== this.props.city.id) ) {
      this.refresh();
    }

  }

  refresh()
  {
    this.props.getForecast(this.props.city);
  }

  render() {

      return (
        <div className="forecast-wrap">
          <div className={['forecast-container',!this.props.city ? 'empty' : ''].join(' ')}>
            {
              this.props.city ?
              (
                <div>
                  <div className="forecast-city-name">{this.props.city.name}</div>
                  <button onClick={this.refresh.bind(this)} className={['forecast-refresh','fa','fa-refresh',this.props.isFetching ? 'fa-spin' : ''].join(' ')}/>

                  <div className="forecast-current-wrap">
                    <div className="forecast-current-img">
                      <img width="100" height="100" alt={this.props.city.weather[0].description} src={weatherIcon(this.props.city.weather[0].icon)}/>
                    </div>
                    <div className="forecast-current-details">
                      <div>{Math.round(this.props.city.main.temp)}C</div>
                      <div>{this.props.city.weather[0].description}</div>
                      <div>Wind: {this.props.city.wind.speed}ms {this.props.city.wind.deg}</div>
                      <div>Pressure {this.props.city.main.pressure}</div>
                    </div>
                  </div>

                  <div className="forecast-fiveday">
                    {
                      this.props.error ? this.props.error : ''
                    }

                    {
                      this.props.isFetching ? 'Retrieving 5-day forecast...' : ''
                    }

                    {
                      this.props.forecast && this.props.forecast.map(forecastItem => <ForecastItem key={forecastItem.dt} {...forecastItem}/>)
                    }

                  </div>
                </div>
              ) :
              (
                <div>
                  Please select a city to see a 5 day forecast
                </div>
              )
            }
          </div>
        </div>
      )

  }
}

const mapStateToProps = (state, ownProps) => ({ error: state.forecast.error, isFetching: state.forecast.isFetching, forecast: state.forecast.list });
const mapDispatchToProps = { getForecast };
const ForecastContainer = connect(mapStateToProps, mapDispatchToProps)(Forecast);
export default ForecastContainer;