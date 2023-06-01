import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: require('./marker.png'),
  iconSize: [20, 20],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const Markers = ({ coord, humidities }) => {

	if (humidities.length === coord.length) {
		const markers = coord.map((value, i) => (
			<Marker key={ i } position={ { lat: value.lat, lng: value.lon } } icon={ markerIcon } >
				<Tooltip>
			  	<span>Humidity: { humidities[i].humidity }%</span>
			  </Tooltip>	
			</Marker>	
		));	
		return <>{ markers }</>
	}

};

export default Markers;