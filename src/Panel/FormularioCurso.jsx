import React, { useState } from 'react';

export default function FormularioCurso({ onSubmit, cursos }) {
	const [modo, setModo] = useState('crear');
	const [curso, setCurso] = useState({ codigoCurso: '', nombreCurso: '', horasCatedra: 0, horasPractica: 0, nivel: 0 });

	const handleSubmit = (e) => {
		e.preventDefault();
		//onSubmit(curso);
		setCurso({ codigoCurso: '', nombreCurso: '', horasCatedra: 0, horasPractica: 0, nivel: 0 });
	};

	const estilo_text_input = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";

	const estilo_submit_button = "w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

	const estilo_label = "block text-sm font-medium text-gray-700";

	const CreadorCurso = () => {
		return (
			<form onSubmit={handleSubmit} className="space-y-4">
				<InputCodigoCurso />
				<InputNombreCurso />
				<InputHorasCatedra />
				<InputHorasPractica />
				<InputNivel />
				<button type="submit" className={estilo_submit_button}>Crear Curso</button>
			</form>
		);
	}

	const InputCodigoCurso = () => {
		return (
			<div>
				<label htmlFor="codigoCurso" className={estilo_label}>Código del Curso</label>
				<input
					type="text"
					id="codigoCurso"
					value={curso.codigoCurso}
					onChange={(e) => setCurso({ ...curso, codigoCurso: e.target.value })}
					className={estilo_text_input}
					required
					/>
			</div>
		);
	}

	const InputNombreCurso = () => {
		return (
			<div>
			<label htmlFor="nombreCurso" className={estilo_label}>Nombre del Curso</label>
			<input
				type="text"
				id="nombreCurso"
				value={curso.nombreCurso}
				onChange={(e) => setCurso({ ...curso, nombreCurso: e.target.value })}
				className={estilo_text_input}
				required
				/>
			</div>
		);
	}

	const InputHorasCatedra = () => {
		return (
			<div>
			<label htmlFor="horasCatedra" className={estilo_label}>Horas Cátedra</label>
			<input
				type="number"
				id="horasCatedra"
				value={curso.horasCatedra}
				onChange={(e) => setCurso({ ...curso, horasCatedra: parseInt(e.target.value) })}
				className={estilo_text_input}
				required
			/>
			</div>
		);
	}

	const InputHorasPractica = () => {
		return (
			<div>
				<label htmlFor="horasPractica" className={estilo_label}>Horas Práctica</label>
				<input
					type="number"
					id="horasPractica"
					value={curso.horasPractica}
					onChange={(e) => setCurso({ ...curso, horasPractica: parseInt(e.target.value) })}
					className={estilo_text_input}
					required
				/>
			</div>
		);
	}

	const InputNivel = () => {
		return (
			<div>
				<label htmlFor="nivel" className={estilo_label}>Nivel</label>
				<input
					type="number"
					id="nivel"
					value={curso.nivel}
					onChange={(e) => setCurso({ ...curso, nivel: parseInt(e.target.value) })}
					className={estilo_text_input}
					required
				/>
			</div>
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


	const ListadoCursos = () => {
		return (
			<ul className="space-y-2">
				{cursos.map((c, index) => (
					<li key={index} className="bg-white p-4 rounded-md shadow">
						<h3 className="font-bold">{c.nombreCurso}</h3>
					</li>
				))}
			</ul>
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