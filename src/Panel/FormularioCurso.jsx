import React, { useState } from 'react';
import InputNumerico from './UI/InputNumerico';
import InputText from './UI/InputTexto';
import ListadoCursos from './ListadoCursos';
export default function FormularioCurso({ onSubmit, cursos }) {
	const [modo, setModo] = useState('crear');

	const handleSubmit = (e) => {
		e.preventDefault();
		//onSubmit(curso);
		setCurso({ codigoCurso: '', nombreCurso: '', horasCatedra: 0, horasPractica: 0, nivel: 0 });
	};

	const estilo_submit_button = "w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

	const CreadorCurso = () => {
		const [curso, setCurso] = useState({ codigoCurso: '', nombreCurso: '', horasCatedra: 0, horasPractica: 0, nivel: 0 });
	
		return (
			<form onSubmit={handleSubmit} className="space-y-4">
				<InputText	
				label="Código del Curso"
				value={curso.codigoCurso}
				onChange={(newValue) => setCurso({ ...curso, codigoCurso: newValue })}
				required={true}
				/>
				<InputText	
				label="Nombre del Curso"
				value={curso.nombreCurso}
				onChange={(newValue) => setCurso({ ...curso, nombreCurso: newValue })}
				required={true}
				/>
				<InputNumerico
				label="Horas Cátedra"
				value={curso.horasCatedra}
				onChange={(newValue) => setCurso({ ...curso, horasCatedra: newValue })}
				required={true}
				/>
				<InputNumerico
				label="Horas Práctica"
				value={curso.horasPractica}
				onChange={(newValue) => setCurso({ ...curso, horasPractica: newValue })}
				required={true}
				/>	
				<InputNumerico
				label="Nivel"
				value={curso.nivel}
				onChange={(newValue) => setCurso({ ...curso, nivel: newValue })}
				required={true}
				/>
				<button type="submit" className={estilo_submit_button}>Crear Curso</button>
			</form>
		);
	}
	

	const SelectorModo = () => {
		const estilo_boton_crear = `mr-2 px-4 py-2 ${modo === 'crear' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`;
		const estilo_boton_listado = `px-4 py-2 ${modo === 'listado' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`;

		return (
			<div className="mb-4">
				<button className={estilo_boton_crear} onClick={() => setModo('crear')}>Crear</button>
				<button className={estilo_boton_listado} onClick={() => setModo('listado')}>Listado</button>
			</div>
		);
	}



	return (
		<div>
			<SelectorModo />
			{modo === 'crear' ? (
				<CreadorCurso />
			) : (
				<ListadoCursos />
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