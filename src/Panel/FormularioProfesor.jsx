import React, { useState } from 'react';

export default function FormularioProfesor({ onSubmit, profesores }) {
	const [modo, setModo] = useState('crear');
	const [profesor, setProfesor] = useState({ codigoProfesor: '', nombreProfesor: '', bloquesDisponibles: {} });

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(profesor);
		setProfesor({ codigoProfesor: '', nombreProfesor: '', bloquesDisponibles: {} });
	};

	const handleBloquesChange = (dia, bloques) => {
		const bloquesArray = bloques.split(',').map(Number).filter(Boolean);
		setProfesor({
			...profesor,
			bloquesDisponibles: {
				...profesor.bloquesDisponibles,
				[dia]: bloquesArray,
			},
		});
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
						<label htmlFor="codigoProfesor" className="block text-sm font-medium text-gray-700">Código del Profesor</label>
						<input
							type="text"
							id="codigoProfesor"
							value={profesor.codigoProfesor}
							onChange={(e) => setProfesor({ ...profesor, codigoProfesor: e.target.value })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<div>
						<label htmlFor="nombreProfesor" className="block text-sm font-medium text-gray-700">Nombre del Profesor</label>
						<input
							type="text"
							id="nombreProfesor"
							value={profesor.nombreProfesor}
							onChange={(e) => setProfesor({ ...profesor, nombreProfesor: e.target.value })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					{[1, 2, 3, 4, 5, 6, 7].map((dia) => (
						<div key={dia}>
							<label htmlFor={`bloques-${dia}`} className="block text-sm font-medium text-gray-700">
								Bloques disponibles para el día {dia} (separados por coma)
							</label>
							<input
								type="text"
								id={`bloques-${dia}`}
								value={profesor.bloquesDisponibles[dia]?.join(',') || ''}
								onChange={(e) => handleBloquesChange(dia, e.target.value)}
								className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							/>
						</div>
					))}
					<button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Crear Profesor
					</button>
				</form>
			) : (
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
			)}
		</div>
	);
}
