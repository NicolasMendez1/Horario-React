import React, { useState } from 'react';

export default function FormularioSala({ onSubmit, salas }) {
	const [modo, setModo] = useState('crear');
	const [sala, setSala] = useState({ codigoSala: '', nombreSala: '', capacidad: 0 });
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  onSubmit(sala);
	  setSala({ codigoSala: '', nombreSala: '', capacidad: 0 });
	};
  
	return (
	  <div>
		<div className="mb-4">
		  <button
			className={`mr-2 px-4 py-2 ${modo === 'crear' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
			onClick={() => setModo('crear')}
		  >
			Crear
		  </button>
		  <button
			className={`px-4 py-2 ${modo === 'listado' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
			onClick={() => setModo('listado')}
		  >
			Listado
		  </button>
		</div>
		{modo === 'crear' ? (
		  <form onSubmit={handleSubmit} className="space-y-4">
			<div>
			  <label htmlFor="codigoSala" className="block text-sm font-medium text-gray-700">Código de la Sala</label>
			  <input
				type="text"
				id="codigoSala"
				value={sala.codigoSala}
				onChange={(e) => setSala({ ...sala, codigoSala: e.target.value })}
				className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				required
			  />
			</div>
			<div>
			  <label htmlFor="nombreSala" className="block text-sm font-medium text-gray-700">Nombre de la Sala</label>
			  <input
				type="text"
				id="nombreSala"
				value={sala.nombreSala}
				onChange={(e) => setSala({ ...sala, nombreSala: e.target.value })}
				className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				required
			  />
			</div>
			<div>
			  <label htmlFor="capacidad" className="block text-sm font-medium text-gray-700">Capacidad</label>
			  <input
				type="number"
				id="capacidad"
				value={sala.capacidad}
				onChange={(e) => setSala({ ...sala, capacidad: parseInt(e.target.value) })}
				className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				required
			  />
			</div>
			<button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
			  Crear Sala
			</button>
		  </form>
		) : (
		  <ul className="space-y-2">
			{salas.map((s, index) => (
			  <li key={index} className="bg-white p-4 rounded-md shadow">
				<h3 className="font-bold">{s.nombreSala}</h3>
				<p>Código: {s.codigoSala}</p>
				<p>Capacidad: {s.capacidad}</p>
			  </li>
			))}
		  </ul>
		)}
	  </div>
	);
  }
  