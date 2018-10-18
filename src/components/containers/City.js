import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityList from '../city.list';
import CitySelector from '../city.selector';
import { addCity, removeCity, updateCity, clearCities } from '../../actions/cities';

class City extends Component {

  componentDidUpdate(prevProps,prevState)
  {

    if(this.props.addCityError && this.props.addCityError !== prevProps.addCityError) {
      alert(this.props.addCityError.message);
    }
  }

  render()
  {
    return (
      <div className="city-container-wrap">
        <div className="city-container">
          <CitySelector
            add={this.props.addCity}
          />

          <CityList 
            selected={this.props.selected}
            cities={this.props.cities}
            select={this.props.select}
            remove={this.props.removeCity}
            refresh={this.props.updateCity}
            clear={this.props.clearCities}
          />
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state, ownProps) => ({ addCityError: state.addCityError });
const mapDispatchToProps = { addCity, removeCity, updateCity, clearCities };
const CityContainer = connect(mapStateToProps, mapDispatchToProps)(City);
export default CityContainer;