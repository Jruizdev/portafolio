import React, { useEffect, useState } from 'react';
import { ModalProyecto } from './ModalProyecto';
import { ElementoProyecto } from './ElementoProyecto';

function bloqueGrande (indice) {
  
  // Determinar si el bloque correspondiente al índice debe ser grande
  const x = indice + 1;
  const c = 3/2;
  const bloque_largo = (-Math.sin((c * x)- c)) >= 0 ? true : false;

  if (bloque_largo) return true;
  return false;

}

function PatronRejilla (
  proyectos, 
  setShow, 
  setTitulo, 
  setDescripcion, 
  setHabilidades,
  setPortada,
  setRepositorio,
  setEnlace
) {

  let fila = [];
  const rejilla_proyectos = [];

  for (let i = 0; i < proyectos.length; i++) {

    const habilidades = proyectos[i].habilidades.split(',');
    let etiquetas = [];
    
    habilidades.forEach (habilidad => {
      etiquetas.push (<li key={habilidad} className='h-100 rounded'>{habilidad}</li>);
    });

    if (bloqueGrande (i)) fila.push (
      <li 
      key = {i}
      className = 'col-12 col-sm-7 p-0 rounded shadow-lg'
      onClick = {() => {
          setTitulo (proyectos[i].nombre);
          setDescripcion (proyectos[i].descripcion);
          setHabilidades (etiquetas);
          setPortada (proyectos[i].portada);
          setRepositorio (proyectos[i].repositorio);
          setEnlace (proyectos[i].enlace);
          setShow (true);
      }} 
      >
        <ElementoProyecto 
          portada =     { proyectos[i].portada }
          nombre =      { proyectos[i].nombre }
          descripcion = { proyectos[i].descripcion }
          etiquetas =   { etiquetas }
        />
      </li>
    );
    else fila.push (
      <li 
      className = 'col-12 col-sm p-0 rounded shadow-lg'
      onClick = {() => {
          setTitulo (proyectos[i].nombre);
          setDescripcion (proyectos[i].descripcion);
          setPortada (proyectos[i].portada);
          setHabilidades (etiquetas);
          setRepositorio (proyectos[i].repositorio);
          setEnlace (proyectos[i].enlace);
          setShow (true);
      }} 
      key = {i}
      >
        <ElementoProyecto 
          portada =     { proyectos[i].portada }
          nombre =      { proyectos[i].nombre }
          descripcion = { proyectos[i].descripcion }
          etiquetas =   { etiquetas }
        />
      </li>
    );
    
    if ((i + 1) % 2 === 0 || i === proyectos.length - 1) {
      rejilla_proyectos.push (

        // Crear etiquetas con las habilidades
        <ul className='row w-100 p-0 mx-auto' key = { i }>{ fila }</ul>
      );
      fila = [];
    }
  }
  return (rejilla_proyectos);
}

const Proyectos = (props) => {

  const [proyectos, setProyectos] = useState ([]);

  useEffect (() => {

    // Recuperar proyectos mediante API de "APProyectos"
    const fetchAPI = async () => {
      const response = await fetch('https://jrodev.x10.mx', {
          method: 'GET',
      })
      .catch ((error) => (console.error(error)));

      const data = await response.json();
      setProyectos (data);

    }; fetchAPI();
  }, []);

  let rejilla = PatronRejilla (
    proyectos,
    props.setShow, 
    props.setTitulo,
    props.setDescripcion,
    props.setHabilidades,
    props.setPortada,
    props.setRepositorio,
    props.setEnlace
  );
  return ( <>{ rejilla }</> );
}

export const GaleriaProyectos = () => {

  const [showModal, setShow] = useState (false);
  const [titulo, setTitulo] = useState ('');
  const [descripcion, setDescripcion] = useState ('');
  const [habilidades, setHabilidades] = useState (null);
  const [portada, setPortada] = useState ('');
  const [repositorio, setRepositorio] = useState ('');
  const [enlace, setEnlace] = useState ('');

  return (
    <div className='proyectos w-100 p-0'>

        <ModalProyecto 
          titulo = { titulo } 
          descripcion = { descripcion }
          habilidades = { habilidades }
          portada = { portada }
          repositorio = { repositorio }
          enlace = { enlace }
          show = { showModal } 
          onHide = {() => setShow (false)}
        />
        <Proyectos 
          setShow = { setShow } 
          setTitulo = { setTitulo }
          setDescripcion = { setDescripcion }
          setHabilidades = { setHabilidades }
          setPortada = { setPortada }
          setRepositorio = { setRepositorio }
          setEnlace = { setEnlace }
        />
        
    </div>
  )
}