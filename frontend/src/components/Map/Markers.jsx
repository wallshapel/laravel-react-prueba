import React from 'react';
import { Marker, Tooltip, Popup } from 'react-leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';

const Markers = ({ coord, humidities }) => {

	if (humidities.length === coord.length) {
		const markers = coord.map((value, i) => (
			<Marker key={ i } position={ { lat: value.lat, lng: value.lon } } icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} >
				<Popup>Humidity: { humidities[i].humidity }%</Popup>
				<Tooltip offset={[0, -40]} >
			  	<span>Humidity: { humidities[i].humidity }%</span>
			  </Tooltip>	
			</Marker>	
		));	
		return <>{ markers }</>
	}

};

export default Markers;