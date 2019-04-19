import React, { Component } from 'react';

import './Map.css';

class Map extends Component {
  constructor() {
    super();
    this.map = '';
    this.latLng = { lat: 53.5775, lng: 23.106111 };
    this.markers = [];
  }

  generateMap() {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.latLng,
      zoom: 4,
      maxZoom: 6,
    });
  }

  selectMarker() {
    if (this.props && this.props.selectedLocation) {
      const selectedLocation = this.props.selectedLocation;
      const latLng = new window.google.maps.LatLng(selectedLocation.latitude, selectedLocation.longitude);
      this.map.panTo(latLng);
      const marker = this.findMarker(selectedLocation.name);
      window.google.maps.event.trigger(marker, 'click')
    }
  }

  findMarker(locationName) {
    return this.markers.find(marker => marker.name === locationName);
  }

  generateMarkers() {
    const locations = this.props.locations;
    let marker;
    const infoWindow = new window.google.maps.InfoWindow();

    locations.forEach((location) => {
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location.latitude, location.longitude),
        map: this.map
      })

      window.google.maps.event.addListener(marker, 'click', ((marker) => {
        return () => {
          infoWindow.setContent(location.name);
          infoWindow.open(this.map, marker);
        }
      })(marker, location));

      marker.name = location.name;
      this.markers.push(marker);
    })
  }

  componentDidMount() {
    this.generateMap();
  }

  componentDidUpdate() {
    this.generateMarkers();
    this.selectMarker();
  }

  render() {
    return (
      <aside>
        <h2>Map</h2>
        <div style={{ width: 800, height: 600 }} id="map" />
      </aside>
    );
  }
}

export default Map;
