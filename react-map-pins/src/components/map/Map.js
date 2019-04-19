import React, { Component } from 'react';

class Map extends Component {
  constructor() {
    super();
    this.map = '';
    this.latLng = { lat: 53.5775, lng: 23.106111 };
  }

  generateMap() {
    this.map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.latLng,
      zoom: 4,
      maxZoom: 6,
    });
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
    })
  }

  componentDidMount() {
    this.generateMap();
  }

  componentDidUpdate() {
    this.generateMarkers();
  }

  render() {
    return (
      <div style={{ width: 800, height: 800 }} id="map" />
    );
  }
}

export default Map;
