import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import miamiMap from './images/miami.png';
import newYorkMap from './images/new-york.png';
import orlandoMap from './images/orlando.png';
import './weather.css';

export const Weather = ({ cityName }) => {

	const key = 'acc2a06f0795ca9520a47369b0dae32a';	
	let urlApiCityName = 'http://api.openweathermap.org/geo/1.0/direct?appid=' + key + '&q=';
	let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=' + key;
	const endpointRecord = 'http://127.0.0.1:8000/api';

	const [humidity, setHumidity] = useState(0);
	const [cityId, setCityId] = useState(0);

	const api = async (url) => {
  		let res = await fetch(url);
		const apiCity = await res.json();
		//console.log(apiCity);
		res = await fetch(urlWeather + '&lat=' + apiCity[0].lat + '&lon=' + apiCity[0].lon);
		const weatherApi = await res.json();
		//console.log(weatherApi);
		setHumidity(weatherApi.main.humidity);
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
		if (cityName !== '')
			api(urlApiCityName + cityName);			
		else
			setHumidity(0);
		//eslint-disable-next-line react-hooks/exhaustive-deps
  	}, [cityName]);

	return (
		<div className='container font-size'>			
			{ cityName === 'Miami' ? <img src={ miamiMap } alt='Miami' /> : '' } 
			{ cityName === 'New York' ? <img src={ newYorkMap } alt='New York' /> : '' } 			
			{ cityName === 'Orlando' ? <img src={ orlandoMap } alt='Orlando' /> : '' }			
			{ humidity === 0 ? '' : <h2 className='mt-2'>Humidity: { humidity }%</h2> } 
			{ cityName === '' ? '' : <Link to={ '/record/city/' + cityId } className='btn btn-primary mt-4'>Record</Link> }
		</div>		
	);	

};