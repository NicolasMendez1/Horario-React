import React, { useState } from 'react';

export default function FormularioSeccion({ onSubmit, secciones, cursos, salas, profesores }) {
	const [modo, setModo] = useState('crear');
	/*
	const [seccion, setSeccion] = useState({
		numeroSeccion: 0,
		codigoCurso: '',
		bloques: [],
		codigoSala: '',
		codigoProfesor: ''
	});
	*/
	const handleSubmit = (e) => {
		e.preventDefault();
		/*
		onSubmit(seccion);
		setSeccion({
			numeroSeccion: 0,
			codigoCurso: '',
			bloques: [],
			codigoSala: '',
			codigoProfesor: ''
		});
		*/
	};

	const handleBloquesChange = (e) => {
		const bloques = e.target.value.split(',').map(bloque => {
			const [numeroDia, numeroBloque] = bloque.split('-').map(Number);
			return { numeroDia, numeroBloque };
		});
		setSeccion({ ...seccion, bloques });
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
						<label htmlFor="numeroSeccion" className="block text-sm font-medium text-gray-700">Número de Sección</label>
						<input
							type="number"
							id="numeroSeccion"
							value={seccion.numeroSeccion}
							onChange={(e) => setSeccion({ ...seccion, numeroSeccion: parseInt(e.target.value) })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<div>
						<label htmlFor="codigoCurso" className="block text-sm font-medium text-gray-700">Curso</label>
						<select
							id="codigoCurso"
							value={seccion.codigoCurso}
							onChange={(e) => setSeccion({ ...seccion, codigoCurso: e.target.value })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						>
							<option value="">Seleccione un curso</option>
							{cursos.map((curso) => (
								<option key={curso.codigoCurso} value={curso.codigoCurso}>
									{curso.nombreCurso}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="bloques" className="block text-sm font-medium text-gray-700">
							Bloques (formato: día-bloque, separados por coma)
						</label>
						<input
							type="text"
							id="bloques"
							value={seccion.bloques.map(b => `${b.numeroDia}-${b.numeroBloque}`).join(',')}
							onChange={handleBloquesChange}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<div>
						<label htmlFor="codigoSala" className="block text-sm font-medium text-gray-700">Sala</label>
						<select
							id="codigoSala"
							value={seccion.codigoSala}
							onChange={(e) => setSeccion({ ...seccion, codigoSala: e.target.value })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						>
							<option value="">Seleccione una sala</option>
							{salas.map((sala) => (
								<option key={sala.codigoSala} value={sala.codigoSala}>
									{sala.nombreSala}
								</option>
							))}
						</select>
					</div>
					<div>
						<label htmlFor="codigoProfesor" className="block text-sm font-medium text-gray-700">Profesor</label>
						<select
							id="codigoProfesor"
							value={seccion.codigoProfesor}
							onChange={(e) => setSeccion({ ...seccion, codigoProfesor: e.target.value })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						>
							<option value="">Seleccione un profesor</option>
							{profesores.map((profesor) => (
								<option key={profesor.codigoProfesor} value={profesor.codigoProfesor}>
									{profesor.nombreProfesor}
								</option>
							))}
						</select>
					</div>
					<button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Crear Sección
					</button>
				</form>
			) : (
				<ul className="space-y-2">
					{secciones.map((s, index) => (
						<li key={index} className="bg-white p-4 rounded-md shadow">
							<h3 className="font-bold">Sección {s.numeroSeccion}</h3>
							<p>Curso: {s.codigoCurso}</p>
							<p>Sala: {s.codigoSala}</p>
							<p>Profesor: {s.codigoProfesor}</p>
							<p>Bloques:</p>
							<ul>
								{s.bloques.map((b, i) => (
									<li key={i}>Día {b.numeroDia}, Bloque {b.numeroBloque}</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
