import React, { Component } from 'react';

import './PinsList.css';

class PinsList extends Component {
  selectLocation = (location) => {
    this.props.onLocationSelect(location);
  }

  render() {
    return (
      <div className="pins-wrapper">
        {this.props.locations.map(location => {
          return <button key={location.name} onClick={() => { this.selectLocation(location) }}>{location.name}</button>
        })}
      </div>
    );
  }
}

export default PinsList;
