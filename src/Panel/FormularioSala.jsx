import React, { useState } from 'react';

export default function FormularioSala({ onSubmit, salas }) {
	const [modo, setModo] = useState('crear');
	const [sala, setSala] = useState({ codigoSala: '', nombreSala: '', capacidad: 0 });
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  onSubmit(sala);
	  setSala({ codigoSala: '', nombreSala: '', capacidad: 0 });
	};
  
	const estilo_text_input = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
	const estilo_submit_button = "w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
	const estilo_label = "block text-sm font-medium text-gray-700";
  
	const InputCodigoSala = () => (
	  <div>
		<label htmlFor="codigoSala" className={estilo_label}>Código de la Sala</label>
		<input
		  type="text"
		  id="codigoSala"
		  value={sala.codigoSala}
		  onChange={(e) => setSala({ ...sala, codigoSala: e.target.value })}
		  className={estilo_text_input}
		  required
		/>
	  </div>
	);
  
	const InputNombreSala = () => (
	  <div>
		<label htmlFor="nombreSala" className={estilo_label}>Nombre de la Sala</label>
		<input
		  type="text"
		  id="nombreSala"
		  value={sala.nombreSala}
		  onChange={(e) => setSala({ ...sala, nombreSala: e.target.value })}
		  className={estilo_text_input}
		  required
		/>
	  </div>
	);
  
	const InputCapacidad = () => (
	  <div>
		<label htmlFor="capacidad" className={estilo_label}>Capacidad</label>
		<input
		  type="number"
		  id="capacidad"
		  value={sala.capacidad}
		  onChange={(e) => setSala({ ...sala, capacidad: parseInt(e.target.value) })}
		  className={estilo_text_input}
		  required
		/>
	  </div>
	);
  
	const CreadorSala = () => (
	  <form onSubmit={handleSubmit} className="space-y-4">
		<InputCodigoSala />
		<InputNombreSala />
		<InputCapacidad />
		<button type="submit" className={estilo_submit_button}>
		  Crear Sala
		</button>
	  </form>
	);
  
	const ListadoSalas = () => (
	  <ul className="space-y-2">
		{salas.map((s, index) => (
		  <li key={index} className="bg-white p-4 rounded-md shadow">
			<h3 className="font-bold">{s.nombreSala}</h3>
			<p>Código: {s.codigoSala}</p>
			<p>Capacidad: {s.capacidad}</p>
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
		{modo === 'crear' ? <CreadorSala /> : <ListadoSalas />}
	  </div>
	);
  }
  