import React, { Component } from 'react';

import './PinsList.css';

class PinsList extends Component {
  render() {
    return (
      <div className="pins-wrapper">
        {this.props.locations.map(location => {
          return <a href="#" key={location.name}>{location.name}</a>
        })}
      </div>
    );
  }
}

export default PinsList;
