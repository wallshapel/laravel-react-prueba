import React from 'react';
import { Marker, Tooltip, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const Markers = ({ weather }) => {

	const markers = weather.map((key, i) => (
		<Marker key={ i } position={ { lat: key.lat, lng: key.lon } } icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
			<Popup>Humidity: { key.humidity }%</Popup>
			<Tooltip offset={[0, -40]} >
		  	<span>Humidity: { key.humidity }%</span>
		  </Tooltip>	
		</Marker>	
	));	
	
	return <>{ markers }</>

};

export default Markers;