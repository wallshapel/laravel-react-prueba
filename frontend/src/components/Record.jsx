import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';  // useParams servirá para obtener el id de la URL
import moment from 'moment';  // Librería para formatear fechas
import DataTable from 'react-data-table-component';

const Record = () => {

	const endpointRecord = 'http://127.0.0.1:8000/api/record/city/';
	const { id } = useParams();  // Obtenemos el id de la ciudad desde la URL

	// DataTables
	const [records, setRecords] = useState([]);
	const columns = [
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

	useEffect(() => {		
		const getRecordsByCityId = async () => {
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
		getRecordsByCityId();
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='container text-center table-responsive'>
			{ id === '1' ? <h1 className='mt-5 mb-4'>Miami weather history</h1> : '' } 
			{ id === '2' ? <h1 className='mt-5 mb-4'>New York weather history</h1> : '' } 
			{ id === '3' ? <h1 className='mt-5 mb-4'>Orlando weather history</h1> : '' }
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