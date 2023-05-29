import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Markers from './Markers';
import 'leaflet/dist/leaflet.css';

const MapView = ({ lat, lng, humidity, setLoading }) => {

	useEffect(() => {
		if (lat !== 0 && lng !== 0) 
			setLoading(false);
		else
			setLoading(true);
		//eslint-disable-next-line react-hooks/exhaustive-deps
  	}, [lat, lng]);

	if (lat !== 0 && lng !== 0) {

		return <MapContainer center={ { lat, lng } } zoom= {13}>
			<TileLayer 
				url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Markers lat={ lat } lng={ lng } humidity={ humidity } />
		</MapContainer>

	}
	
};

export default MapView;