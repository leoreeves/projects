import React, { Component } from 'react';

import './LocationsList.css';

class LocationsList extends Component {
  selectLocation = (location) => {
    this.props.onLocationSelect(location);
  }

  render() {
    return (
      <aside className="locations-wrapper">
        <h2>Locations</h2>
        <div className="locations-list">
          {this.props.locations.map(location => {
            return <button key={location.name} onClick={() => { this.selectLocation(location) }}>{location.name}</button>
          })}
        </div>
      </aside>
    );
  }
}

export default LocationsList;
