import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';  // useParams servirá para obtener el id de la URL
import moment from 'moment';  // Librería para formatear fechas
import DataTable from 'react-data-table-component';

const Record = () => {

	let endpointRecord = 'http://127.0.0.1:8000/api/record/city/';
	const { id } = useParams();  // Obtenemos el id de la ciudad desde la URL

	// DataTables
	const [records, setRecords] = useState([]);
	let columns = [
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

	if (id === undefined) { // Significa que se mostrará el historial de las 3 ciudades
		endpointRecord = 'http://127.0.0.1:8000/api/record';
		columns = [
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
	}	

	useEffect(() => {		
		const getRecordsByCityId = async () => {
			if (id === undefined) {
				const res = await fetch(endpointRecord);
				const data = await res.json();
				console.log(data);
				let reg = [];
				data.forEach((obj) => {
					reg.push({	
						city: obj.city.name,
						created_at: moment(obj.created_at).format("DD-MM-YYYY  hh:mm:ss"),
						humidity: obj.humidity + '%'	
					});	
				});
				setRecords(reg);		
			} else {
				const res = await fetch(endpointRecord + id);	
				const data = await res.json();
				//console.log(data);
				let reg = [];
				data.forEach((obj) => {
					reg.push({					
						created_at: moment(obj.created_at).format("DD-MM-YYYY  hh:mm:ss"),
						humidity: obj.humidity + '%'	
					});	
				});
				setRecords(reg);		
			}			
		}
		getRecordsByCityId();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container text-center table-responsive'>
			{ id === undefined ? <h1 className='mt-5 mb-4'>All 3 Cities Weather History</h1> : '' }
			{ id === '1' ? <h1 className='mt-5 mb-4'>Miami Weather History</h1> : '' } 
			{ id === '2' ? <h1 className='mt-5 mb-4'>New York Weather History</h1> : '' } 
			{ id === '3' ? <h1 className='mt-5 mb-4'>Orlando Weather History</h1> : '' }
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
			<Link to="/" className="btn btn-primary">Back</Link> 
		</div>
	);
};

export default Record;