import React, { useState } from 'react';

export default function FormularioCurso({ onSubmit, cursos }) {
	const [modo, setModo] = useState('crear');
	const [curso, setCurso] = useState({ codigoCurso: '', nombreCurso: '', horasCatedra: 0, horasPractica: 0 });

	const handleSubmit = (e) => {
		e.preventDefault();
		//onSubmit(curso);
		setCurso({ codigoCurso: '', nombreCurso: '', horasCatedra: 0, horasPractica: 0 });
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
						<label htmlFor="codigoCurso" className="block text-sm font-medium text-gray-700">Código del Curso</label>
						<input
							type="text"
							id="codigoCurso"
							value={curso.codigoCurso}
							onChange={(e) => setCurso({ ...curso, codigoCurso: e.target.value })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<div>
						<label htmlFor="nombreCurso" className="block text-sm font-medium text-gray-700">Nombre del Curso</label>
						<input
							type="text"
							id="nombreCurso"
							value={curso.nombreCurso}
							onChange={(e) => setCurso({ ...curso, nombreCurso: e.target.value })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<div>
						<label htmlFor="horasCatedra" className="block text-sm font-medium text-gray-700">Horas Cátedra</label>
						<input
							type="number"
							id="horasCatedra"
							value={curso.horasCatedra}
							onChange={(e) => setCurso({ ...curso, horasCatedra: parseInt(e.target.value) })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<div>
						<label htmlFor="horasPractica" className="block text-sm font-medium text-gray-700">Horas Práctica</label>
						<input
							type="number"
							id="horasPractica"
							value={curso.horasPractica}
							onChange={(e) => setCurso({ ...curso, horasPractica: parseInt(e.target.value) })}
							className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
							required
						/>
					</div>
					<button type="submit" className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Crear Curso
					</button>
				</form>
			) : (
				<ul className="space-y-2">
					{}
				</ul>
			)}
		</div>
	);
}


/*
cursos.map((c, index) => (
						<li key={index} className="bg-white p-4 rounded-md shadow">
							<h3 className="font-bold">{c.nombreCurso}</h3>
							<p>Código: {c.codigoCurso}</p>
							<p>Horas Cátedra: {c.horasCatedra}</p>
							<p>Horas Práctica: {c.horasPractica}</p>
						</li>
					))

*/