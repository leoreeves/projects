import React, { Component } from 'react';

class Map extends Component {
  componentDidMount() {
    const latLng = { lat: 40.7128, lng: 74.0060 };
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 8
    });
    const locationName = 'Uluru';

    const contentString =
    `<div id="content">
      <div id="siteNotice">
        <h1 id="firstHeading" class="firstHeading">${locationName}</h1>
      </div>
     </div>`;

    const infowindow = new window.google.maps.InfoWindow({
      content: contentString
    });

    const marker = new window.google.maps.Marker({
      position: latLng,
      map: map,
      title: 'Hello World!'
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  render() {
    return (
      <div style={{ width: 800, height: 800 }} id="map" />
    );
  }
}

export default Map;
