import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Markers from './Markers';
import 'leaflet/dist/leaflet.css';

const MapView = ({ coord, humidity, setLoading }) => {

	useEffect(() => {
		if (coord.lat !== 0 && coord.lon !== 0) 
			setLoading(false);
		else
			setLoading(true);
		//eslint-disable-next-line react-hooks/exhaustive-deps
  	}, [coord]);

	if (coord.lat !== 0 && coord.lon !== 0) {

		return <MapContainer center={ { lat: coord.lat, lng: coord.lon } } zoom= { 5 }>
			<TileLayer 
				url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Markers coord={ coord } humidity={ humidity } />
		</MapContainer>

	}
	
};

export default MapView;