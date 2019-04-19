import React, { Component } from 'react';

import './PinsList.css';

class PinsList extends Component {
  render() {
    return (
      <div className="pins-wrapper">
        {this.props.locations.map(location => {
          return <button key={location.name}>{location.name}</button>
        })}
      </div>
    );
  }
}

export default PinsList;
