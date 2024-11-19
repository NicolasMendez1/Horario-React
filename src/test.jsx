import React, { useState } from 'react';

// Componente MatrizHorarios (sin cambios)
function MatrizHorarios() {
  // ... (código sin cambios)
}

// Componente FormularioCurso
function FormularioCurso({ onSubmit, cursos }) {
  const [modo, setModo] = useState('crear');
  const [curso, setCurso] = useState({ codigoCurso: '', nombreCurso: '', horasCatedra: 0, horasPractica: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(curso);
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
          {cursos.map((c, index) => (
            <li key={index} className="bg-white p-4 rounded-md shadow">
              <h3 className="font-bold">{c.nombreCurso}</h3>
              <p>Código: {c.codigoCurso}</p>
              <p>Horas Cátedra: {c.horasCatedra}</p>
              <p>Horas Práctica: {c.horasPractica}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Componente FormularioSala
function FormularioSala({ onSubmit, salas }) {
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

// Componente FormularioProfesor
function FormularioProfesor({ onSubmit, profesores }) {
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

// Componente FormularioSeccion
function FormularioSeccion({ onSubmit, secciones, cursos, salas, profesores }) {
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

// Componente principal HorarioAcademico
export default function HorarioAcademico() {
  const [activeTab, setActiveTab] = useState('cursos');
  const [cursos, setCursos] = useState([]);
  const [salas, setSalas] = useState([]);
  const [profesores, setProfesores] = useState([]);
  const [secciones, setSecciones] = useState([]);

  const handleSubmitCurso = (curso) => {
    setCursos([...cursos, curso]);
  };

  const handleSubmitSala = (sala) => {
    setSalas([...salas, sala]);
  };

  const handleSubmitProfesor = (profesor) => {
    setProfesores([...profesores, profesor]);
  };

  const handleSubmitSeccion = (seccion) => {
    setSecciones([...secciones, seccion]);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Panel lateral izquierdo */}
      <div className="w-1/4 bg-white p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Formularios</h2>
        <div className="space-x-2 mb-4">
          <button
            className={`px-3 py-2 rounded ${activeTab === 'cursos' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('cursos')}
          >
            Cursos
          </button>
          <button
            className={`px-3 py-2 rounded ${activeTab === 'salas' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('salas')}
          >
            Salas
          </button>
          <button
            className={`px-3 py-2 rounded ${activeTab === 'profesores' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('profesores')}
          >
            Profesores
          </button>
          <button
            className={`px-3 py-2 rounded ${activeTab === 'secciones' ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('secciones')}
          >
            Secciones
          </button>
        </div>
        {activeTab === 'cursos' && <FormularioCurso onSubmit={handleSubmitCurso} cursos={cursos} />}
        {activeTab === 'salas' && <FormularioSala onSubmit={handleSubmitSala} salas={salas} />}
        {activeTab === 'profesores' && <FormularioProfesor onSubmit={handleSubmitProfesor} profesores={profesores} />}
        {activeTab === 'secciones' && (
          <FormularioSeccion
            onSubmit={handleSubmitSeccion}
            secciones={secciones}
            cursos={cursos}
            salas={salas}
            profesores={profesores}
          />
        )}
      </div>

      {/* Contenido principal (MatrizHorarios) */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">Horario Académico</h1>
        <MatrizHorarios />
      </div>
    </div>
  );
}