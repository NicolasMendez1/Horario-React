import React, { useState } from 'react';
import SelectorDias from './SelectorDias';

export default function FormularioProfesor({ onSubmit, profesores }) {
	const [modo, setModo] = useState('crear');
	const [profesor, setProfesor] = useState({ codigoProfesor: '', nombreProfesor: '', es_full_time: false, bloquesDisponibles: [[], [], [], [], [], [], [], [], [], [], [], []] });

 
  
	const handleBlockToggle = (dayIndex, block) => {
		profesor.bloquesDisponibles[dayIndex][block] = !profesor.bloquesDisponibles[dayIndex][block];
	  setProfesor((prev) => ({
		...prev,
		bloquesDisponibles: [...prev.bloquesDisponibles],
	  }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(profesor);
		setProfesor({ codigoProfesor: '', nombreProfesor: '', bloquesDisponibles: {} });
	};

	const estilo_text_input = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
	const estilo_submit_button = "w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
	const estilo_label = "block text-sm font-medium text-gray-700";

	const InputCodigoProfesor = () => (
		<div>
			<label htmlFor="codigoProfesor" className={estilo_label}>Código del Profesor</label>
			<input
				type="text"
				id="codigoProfesor"
				value={profesor.codigoProfesor}
				onChange={(e) => setProfesor({ ...profesor, codigoProfesor: e.target.value })}
				className={estilo_text_input}
				required
			/>
		</div>
	);

	const InputNombreProfesor = () => (
		<div>
			<label htmlFor="nombreProfesor" className={estilo_label}>Nombre del Profesor</label>
			<input
				type="text"
				id="nombreProfesor"
				value={profesor.nombreProfesor}
				onChange={(e) => setProfesor({ ...profesor, nombreProfesor: e.target.value })}
				className={estilo_text_input}
				required
			/>
		</div>
	);

	const InputEsFullTime = () => (
		<div className="flex space-x-2 items-center">
			<label htmlFor="esFullTime" className={estilo_label}>Es Full Time</label>
			<input  
				type="checkbox" 
				id="esFullTime" 
				checked={profesor.es_full_time} 
				onChange={(e) => setProfesor({ ...profesor, es_full_time: e.target.checked })}
				className="w-4 h-4" 
			/>
		</div>
	);

	/*
	const InputBloquesDisponibles = () => (
		<>
			{[1, 2, 3, 4, 5, 6, 7].map((dia) => (
				<div key={dia}>
					<label htmlFor={`bloques-${dia}`} className={estilo_label}>
						Bloques disponibles para el día {dia}
					</label>
					<input
						type="text"
						id={`bloques-${dia}`}
						value={profesor.bloquesDisponibles[dia]?.join(',') || ''}
						onChange={(e) => {
							const bloques = e.target.value.split(',').map(Number).filter(Boolean);
							setProfesor({
								...profesor,
								bloquesDisponibles: {
									...profesor.bloquesDisponibles,
									[dia]: bloques,
								},
							});
						}}
						className={estilo_text_input}
					/>
				</div>
			))}
		</>
	);
	*/

	const CreadorProfesor = () => (
		<form onSubmit={handleSubmit} className="space-y-4">
			<InputCodigoProfesor />
			<InputNombreProfesor />
			<InputEsFullTime />
			{!profesor.es_full_time ? <SelectorDias blocks={profesor.bloquesDisponibles} onBlockToggle={handleBlockToggle} /> : null}
			<button type="submit" className={estilo_submit_button}>
				Crear Profesor
			</button>
		</form>
	);

	const ListadoProfesores = () => (
		<ul className="space-y-2">
			{profesores.map((p, index) => (
				<li key={index} className="bg-white p-4 rounded-md shadow">
					<h3 className="font-bold">{p.nombreProfesor}</h3>
					<p>Código: {p.codigoProfesor}</p>
					<p>Bloques Disponibles:</p>
					<ul>
						{Object.entries(p.bloquesDisponibles).map(([dia, bloques]) => (
							<li key={dia}>Día {dia}: {bloques.join(', ')}</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);

	const SelectorModo = () => {
		const estilo_boton_crear = `mr-2 px-4 py-2 ${modo === 'crear' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`;
		const estilo_boton_listado = `px-4 py-2 ${modo === 'listado' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`;

		return (
			<div className="mb-4">
				<button className={estilo_boton_crear} onClick={() => setModo('crear')}>Crear</button>
				<button className={estilo_boton_listado} onClick={() => setModo('listado')}>Listado</button>
			</div>
		);
	};

	return (
		<div>
			<SelectorModo />
			{modo === 'crear' ? <CreadorProfesor /> : <ListadoProfesores />}
		</div>
	);
}
