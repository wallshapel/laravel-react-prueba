import React, { useState } from 'react';
import { Weather } from './Weather';

export const Searcher = () => {

	const [cityName, setCityName] = useState('');

	return (

		<div className='container mt-5 text-center'>
			<h1>Open Weather</h1>
			<select onChange={ (e) => setCityName(e.target.value) } className='form-control mb-5 mt-5' autoFocus>
				<option value=''>Select a city</option>
				<option value='Miami'>Miami</option>				
				<option value='New York'>New York</option>
				<option value='Orlando'>Orlando</option>
			</select>
			<Weather cityName={ cityName } />
		</div>
	);
};