import React, { Component } from 'react';
import './App.css';

import Map from './components/map/Map';
import LocationsList from './components/locations-list/LocationsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      selectedLocation: '',
    }
  }

  handleLocationSelect = (selectedLocation) => {
    this.setState({selectedLocation});
  }

  fetchLocations() {
    fetch('https://cors-anywhere.herokuapp.com/https://s3-eu-west-1.amazonaws.com/omnifi/techtests/locations.json')
      .then(response => response.json())
      .then(data => this.setState({locations: data}))
      .catch(error => console.error(error));
  }

  componentDidMount() {
    this.fetchLocations();
  }

  render() {
    return (
      <div className="App">
        <LocationsList
          locations={this.state.locations}
          onLocationSelect={this.handleLocationSelect}
        />
        <Map
          locations={this.state.locations}
          selectedLocation={this.state.selectedLocation}
        />
      </div>
    );
  }
}

export default App;
