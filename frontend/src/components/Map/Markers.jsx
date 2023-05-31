import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: require('./marker.png'),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const Markers = ({ coord, humidity }) => {

	return (
		<Marker position={ { lat: coord.lat, lng: coord.lon } } icon={ markerIcon } >
			<Tooltip>
		  	<div><b>Humidity: { humidity }%</b></div>
		  </Tooltip>
		</Marker>

	);

};

export default Markers;