import React, {useContext} from 'react'
import Contexto from './contexto/Contexto.jsx';

function Profesora() {
  const {alumno} = useContext(Contexto);
  const idioma = alumno[3].idioma;
  const imagen = `../imagenes/${alumno[idioma].foto}`;
  return (
    <div className='profesora'>
      <h1>{alumno[idioma].boton1}:</h1>
      <div className='foto'>
        <img className='imagen' src={imagen} alt="{alumno[idioma].nombre}"></img>
      </div>
      <div className='nombre'>{alumno[idioma].nombre}</div>
    </div>
  )
}

export default Profesora