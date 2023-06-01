import React, { useState, useEffect } from 'react';
import MapView from '../Map/MapView';
import { Link } from 'react-router-dom';
import './weather.css';

export const Weather = () => {	
	
	const [citiesNames, setCitiesNames] = useState([]);
	const [coord, setCoord] = useState([]);
	const [humidities, setHumidities] = useState([]);
	const [consult, setConsult] = useState(false);

	useEffect(() => {
		citiesDB();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const citiesDB = async () => {  
	    const res = await fetch('http://127.0.0.1:8000/api'); // Endpoint de laravel para obtener los nombres de la tabla cities
	    const data = await res.json();
	    setCitiesNames(data);
	};

	useEffect(() => {	
		citiesNames.map(city => {
			getCoord(city.name);
		});
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [citiesNames]);

	const key = 'acc2a06f0795ca9520a47369b0dae32a';
	const endPointCitiesNames = 'http://api.openweathermap.org/geo/1.0/direct?appid=' + key + '&q=';  // Endpoint para obetener coordenadas por el nombre de la ciudad

	const getCoord = async (cityName) => {
		const res = await fetch(endPointCitiesNames + cityName);
	    const data = await res.json();
	    setCoord(coord => [...coord, { lat: data[0].lat, lon: data[0].lon }]); // Actualizamos el array de objetos 'coord' hasta llenarlo de las coordenadas de las ciudades
	};

	const endPointWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=' + key;

	const showWeather = async () => {
		if (consult) 
			setHumidities([]);
		setConsult(true);
		coord.map(key => {
			getHumidities(key.lat, key.lon);
		});			
	};

	const getHumidities = async (lat, lon) => {
		const res = await fetch(endPointWeather + '&lat=' + lat + '&lon=' + lon);
		const data = await res.json();
		setHumidities(humidities => [...humidities, { humidity: data.main.humidity }]); // Actualizamos el array de objetos 'coord' hasta llenarlo de las coordenadas de las ciudades
	};

	const store = async (city_id, humidity) => {
		const params = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8'	},
			body: JSON.stringify({
				city_id,
				humidity
			})
		};		
		await fetch('http://127.0.0.1:8000/api/record', params);
	} 

	useEffect(() => {
		if (humidities.length === coord.length) {
			citiesNames.map((key, i) => {
				store(key.id, humidities[i].humidity);
			});	
		}		
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [humidities]);

	return (
		<div className='container text-center mt-4'>
			{ consult === true ? <h1>Weather</h1> : '' }
			{ consult === true ? <MapView coord={ coord } humidities={ humidities } /> : '' }		
			<button className='btn btn-success mt-4' onClick={ showWeather }>Weather</button>
			<Link to={ '/record' } className='btn btn-primary mt-4'>Record</Link>
		</div>		
	);	

};