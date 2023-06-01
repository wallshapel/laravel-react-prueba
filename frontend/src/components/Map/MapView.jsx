import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Markers from './Markers';
import 'leaflet/dist/leaflet.css';

const MapView = ({ weather }) => {

	if (Object.entries(weather).length !== 0) {
		// 40.500141, -97.422813 // Centro de los estados unidos
		return	<MapContainer center={ { lat: 40.500141, lng: -97.422813 } } zoom= { 4 }>
			<TileLayer 
				url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Markers weather={ weather } />
		</MapContainer>
	}
	
};

export default MapView;