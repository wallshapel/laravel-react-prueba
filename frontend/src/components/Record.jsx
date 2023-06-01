import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // useParams servirá para obtener el id de la URL
import moment from 'moment';  // Librería para formatear fechas
import DataTable from 'react-data-table-component';

const Record = () => {

	const endPointRecord = 'http://127.0.0.1:8000/api/record';
	const [records, setRecords] = useState([]);
	// DataTables
	const columns = [
		{
			name: 'City',
			selector: (records, i) => records.city,
			sortable: true
		},
		{
			name: 'Datetime',
			selector: (records, i) => records.created_at,
			sortable: true
		},
		{
			name: 'Humidity',
			selector: (records, i) => records.humidity,
			sortable: true
		}
	];
	// Fin DataTables
		
	const getRecords = async () => {
		const res = await fetch(endPointRecord);
		const data = await res.json();
		//console.log(data);
		let reg = [];
		data.forEach((obj) => {
			reg.push({	
				city: obj.city.name,
				created_at: moment(obj.created_at).format("DD-MM-YYYY  hh:mm:ss"),
				humidity: obj.humidity + '%'	
			});	
		});
		setRecords(reg);		
	}

	useEffect(() => {		
		getRecords();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		//eslint-disable-next-line react-hooks/exhaustive-deps	
	}, [records]);

	const filter = (match) => {
		if (match === '') 
			getRecords();
		else {
			let newData = records.filter(reg => {
				return reg.city.toLowerCase().includes(match.toLowerCase());
			});	
			if (newData.length !== 0) 
				setRecords(newData);
			else {
				newData = records.filter(reg => {
					return reg.humidity.toLowerCase().includes(match.toLowerCase());
				});	
				if (newData.length !== 0) 
					setRecords(newData);					
				else {
					newData = records.filter(reg => {
					return reg.humidity.toLowerCase().includes(match.toLowerCase());
					});	
					if (newData.length !== 0) 
						setRecords(newData);		
				}
			}		
		}
	};

	return (
		<div className='container text-center table-responsive'>
			<h1 className='mt-5 mb-4'>Weather History</h1>
			<label htmlFor='search'>Search: <input id='search' type='search' className='text-end' onChange={ (e) => filter(e.target.value) } autoFocus /></label>
			<DataTable 
				columns={ columns } 
				data={ records } 
				pagination 
				fixedHeader 
				fixedHeaderScrollHeight='600px'
				striped 
				highlightOnHover
				dense
			/> 		
			<Link to="/" className="btn btn-primary mt-5">Back</Link> 
		</div>
	);
};

export default Record;