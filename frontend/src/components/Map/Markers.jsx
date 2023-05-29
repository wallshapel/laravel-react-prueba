import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: require('./images/marker.png'),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const Markers = ({ lat, lng, humidity }) => {

	return (
		<Marker position={ { lat, lng} } icon={ markerIcon } >
			<Popup>
		  	<div><b>Humidity: { humidity }%</b></div>
		  </Popup>
		</Marker>

	);

};

export default Markers;