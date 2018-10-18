import React, { Component } from 'react';

export class City extends Component {

  componentDidUpdate(prevProps,prevState)
  {
    if(!this.props.city.isFetching) {
      if(this.props.city.error && !prevProps.city.error) {
        alert(this.props.city.error);
      }
    }
  }

  _refresh = (e) => {
    e.stopPropagation();
    this.props.refresh();
  };

  _remove = (e) => {
    e.stopPropagation();  
    this.props.remove();
  };

  render()
  {
    return (
      <div className={['city-wrap',this.props.isSelected ? 'selected' : ''].join(' ')} onClick={this.props.select}>
        <div className="city-wrap-label">
          {this.props.city.name} - {Math.round(this.props.city.main.temp)}C {this.props.city.weather[0].main}
        </div>
        <button 
          title="refresh" 
          className={['fa fa-refresh',this.props.city.isFetching ? 'fa-spin' : ''].join(' ')} 
          onClick={this._refresh}
        />
        <button 
          title="remove" 
          className={'fa fa-close'} 
          onClick={this._remove}
        />
      </div>
    );

  }

}

export default City;