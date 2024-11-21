import React, { useState } from 'react';
import InputText from '../UI/InputTexto';
import InputNumerico from '../UI/InputNumerico';

export default function FormularioSeccion() {
    const [seccion, setSeccion] = useState({
        numeroSeccion: 0,
        codigoCurso: '',
        bloques: [],
        codigoSalaCatedra: '',
        codigoProfesor: '',
        codigoSalaLaboratorio: '',
        cantidadEstudiantes: 0,

    });
    
    const estilo_submit_button = "w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";

    const handleSubmit = (e) => {
        e.preventDefault();
        //onSubmit(seccion);
        setSeccion({
            numeroSeccion: 0,
            codigoCurso: '',
            bloques: [],
            codigoSalaCatedra: '',
            codigoProfesor: '',
            codigoSalaLaboratorio: '',
            cantidadEstudiantes: 0,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputNumerico
                label="Número de Sección"
                value={seccion.numeroSeccion}
                onChange={(newValue) => setSeccion({ ...seccion, numeroSeccion: newValue })}
                required={true}
            />
            <InputText
                label="Código del Curso"
                value={seccion.codigoCurso}
                onChange={(newValue) => setSeccion({ ...seccion, codigoCurso: newValue })}
                required={true}
            />
            <InputText
                label="Código del Profesor"
                value={seccion.codigoProfesor}
                onChange={(newValue) => setSeccion({ ...seccion, codigoProfesor: newValue })}
                required={true}
            />
            <InputText
                label="Código de Sala de Cátedra"
                value={seccion.codigoSalaCatedra}
                onChange={(newValue) => setSeccion({ ...seccion, codigoSalaCatedra: newValue })}
                required={true}
            />
            <InputText
                label="Código de Sala de Laboratorio"
                value={seccion.codigoSalaLaboratorio}
                onChange={(newValue) => setSeccion({ ...seccion, codigoSalaLaboratorio: newValue })}
                required={true}
            />
            <InputNumerico
                label="Cantidad de Estudiantes"
                value={seccion.cantidadEstudiantes}
                onChange={(newValue) => setSeccion({ ...seccion, cantidadEstudiantes: newValue })}
                required={true}
            />
            <button type="submit" className={estilo_submit_button}>Crear Sección</button>
        </form>
    );
} 