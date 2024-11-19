import React, { useState } from 'react';
import Seccion from '../Horario/Seccion';

const secciones = [
	{
		"codigo_curso": "INF-113",
		"curso": "Introduccion a la Computación 1",
		"sala": "Sala 1-108",
		"profesor": "Hugo Araya"
	}
]

const seccion = {
	"codigo_curso": "INF-113",
	"curso": "Introduccion a la Computación 1",
	"sala": "Sala 1-108",
	"profesor": "Hugo Araya"
}
  

export default function FormularioSeccion({ onSubmit, secciones, cursos, salas, profesores }) {
	const [modo, setModo] = useState('crear');



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
			{modo === 'listado' &&
				<ul className="space-y-2">
					<Seccion seccion={seccion} />
				</ul>
			}
		</div>
	);
}
