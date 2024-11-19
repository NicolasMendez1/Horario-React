import React, { useState } from 'react';

export default function FormularioSeccion({ onSubmit, secciones, cursos, salas, profesores }) {
	const [modo, setModo] = useState('crear');
	const [seccion, setSeccion] = useState({
		numeroSeccion: 0,
		codigoCurso: '',
		bloques: [],
		codigoSala: '',
		codigoProfesor: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(seccion);
		setSeccion({
			numeroSeccion: 0,
			codigoCurso: '',
			bloques: [],
			codigoSala: '',
			codigoProfesor: ''
		});
	};

	const estilo_text_input = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";
	const estilo_submit_button = "w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
	const estilo_label = "block text-sm font-medium text-gray-700";

	const InputNumeroSeccion = () => (
		<div>
			<label htmlFor="numeroSeccion" className={estilo_label}>Número de Sección</label>
			<input
				type="number"
				id="numeroSeccion"
				value={seccion.numeroSeccion}
				onChange={(e) => setSeccion({ ...seccion, numeroSeccion: parseInt(e.target.value) })}
				className={estilo_text_input}
				required
			/>
		</div>
	);

	const InputCurso = () => (
		<div>
			<label htmlFor="codigoCurso" className={estilo_label}>Curso</label>
			<select
				id="codigoCurso"
				value={seccion.codigoCurso}
				onChange={(e) => setSeccion({ ...seccion, codigoCurso: e.target.value })}
				className={estilo_text_input}
				required
			>
				<option value="">Seleccione un curso</option>
				{/*cursos.map((curso) => (
					<option key={curso.codigoCurso} value={curso.codigoCurso}>
						{curso.nombreCurso}
					</option>
				))*/}
			</select>
		</div>
	);

	const InputBloques = () => (
		<div>
			<label htmlFor="bloques" className={estilo_label}>
				Bloques (formato: día-bloque, separados por coma)
			</label>
			<input
				type="text"
				id="bloques"
				value={seccion.bloques.map(b => `${b.numeroDia}-${b.numeroBloque}`).join(',')}
				onChange={(e) => {
					const bloques = e.target.value.split(',').map(bloque => {
						const [numeroDia, numeroBloque] = bloque.split('-').map(Number);
						return { numeroDia, numeroBloque };
					});
					setSeccion({ ...seccion, bloques });
				}}
				className={estilo_text_input}
				required
			/>
		</div>
	);

	const InputSala = () => (
		<div>
			<label htmlFor="codigoSala" className={estilo_label}>Sala</label>
			<select
				id="codigoSala"
				value={seccion.codigoSala}
				onChange={(e) => setSeccion({ ...seccion, codigoSala: e.target.value })}
				className={estilo_text_input}
				required
			>
				<option value="">Seleccione una sala</option>
				{/*salas.map((sala) => (
					<option key={sala.codigoSala} value={sala.codigoSala}>
						{sala.nombreSala}
					</option>
				))*/}
			</select>
		</div>
	);

	const InputProfesor = () => (
		<div>
			<label htmlFor="codigoProfesor" className={estilo_label}>Profesor</label>
			<select
				id="codigoProfesor"
				value={seccion.codigoProfesor}
				onChange={(e) => setSeccion({ ...seccion, codigoProfesor: e.target.value })}
				className={estilo_text_input}
				required
			>
				<option value="">Seleccione un profesor</option>
				{/*profesores.map((profesor) => (
					<option key={profesor.codigoProfesor} value={profesor.codigoProfesor}>
						{profesor.nombreProfesor}
					</option>
				))*/}
			</select>
		</div>
	);

	const CreadorSeccion = () => (
		<form onSubmit={handleSubmit} className="space-y-4">
			<InputNumeroSeccion />
			<InputCurso />
			<InputSala />
			<InputProfesor />
			<button type="submit" className={estilo_submit_button}>
				Crear Sección
			</button>
		</form>
	);

	const ListadoSecciones = () => (
		<ul className="space-y-2">
			{secciones.map((s, index) => (
				<li key={index} className="bg-white p-4 rounded-md shadow">
					<h3 className="font-bold">Sección {s.numeroSeccion}</h3>
					<p>Curso: {s.codigoCurso}</p>
					<p>Sala: {s.codigoSala}</p>
					<p>Profesor: {s.codigoProfesor}</p>
					<p>Bloques:</p>
					<ul>
						{	s.bloques.map((b, i) => (
							<li key={i}>Día {b.numeroDia}, Bloque {b.numeroBloque}</li>
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
			{modo === 'crear' ? <CreadorSeccion /> : <ListadoSecciones />}
		</div>
	);
}
