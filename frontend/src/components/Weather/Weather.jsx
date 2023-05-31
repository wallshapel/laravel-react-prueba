import React, { useState, useEffect } from 'react';
import MapView from '../Map/MapView';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/Loading';
import './weather.css';

export const Weather = ({ cityName }) => {

	const key = 'acc2a06f0795ca9520a47369b0dae32a';	
	let urlApiCityName = 'http://api.openweathermap.org/geo/1.0/direct?appid=' + key + '&q=';
	let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=' + key;
	const endpointRecord = 'http://127.0.0.1:8000/api';

	const [humidity, setHumidity] = useState(0);
	const [coord, setCoord] = useState({
		lat: 0,
		lon: 0}
	);
	const [cityId, setCityId] = useState(0);
	const [loading, setLoading] = useState(false);

	const api = async (url) => {
  		let res = await fetch(url);
		const apiCity = await res.json();
		//console.log(apiCity);
		res = await fetch(urlWeather + '&lat=' + apiCity[0].lat + '&lon=' + apiCity[0].lon);
		const weatherApi = await res.json();
		//console.log(weatherApi);
		setHumidity(weatherApi.main.humidity);
		setCoord({
			lat: apiCity[0].lat,
			lon: apiCity[0].lon
		});
		switch (cityName) {
			case 'Miami':
				setCityId(1);
				store(1, weatherApi.main.humidity);
			break;
			case 'New York':
				setCityId(2);
				store(2, weatherApi.main.humidity);
			break;
			case 'Orlando':
				setCityId(3);
				store(3, weatherApi.main.humidity);
			break;
			default:
				setCityId(0);
			break;
		}
	};

	const store = async (city_id, hum) => {
		const params = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8'	},
			body: JSON.stringify({
				city_id,
				humidity: hum
			})
		};		
		await fetch(endpointRecord + '/record', params);
	}

	useEffect(() => {
		setCoord({
			lat: 0,
			lon: 0
		});
		setHumidity(0);
		if (cityName !== '')
			api(urlApiCityName + cityName);			
		else {
			setCoord({
				lat: 0,
				lon: 0
			});
			setHumidity(0);
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
  	}, [cityName]);

  	useEffect(() => {
		//eslint-disable-next-line react-hooks/exhaustive-deps
  	}, [coord, loading]);

	return (
		<div className='container font-size'>
			{ loading ? <Loading /> : '' }
			{ cityName !== '' ? <MapView coord={ coord } humidity={ humidity } setLoading ={ setLoading } /> : '' }		
			{ cityName === '' ? '' : <Link to={ '/record/city/' + cityId } className='btn btn-primary mt-4'>Record</Link> }
		</div>		
	);	

};