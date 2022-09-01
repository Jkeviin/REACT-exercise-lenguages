import React, {useContext} from 'react'
import Contexto from './contexto/Contexto.jsx';
/* import Provider from './contexto/Provider.jsx'; */

function Idiomas() {
  const {setAlumno} = useContext(Contexto);
  const {alumno} = useContext(Contexto);

  const sustituirIdioma = (idioma) => {
    setAlumno(
      alumno.map(
        (dato, indice) => indice === 3
        ? {...dato, idioma:idioma}
        : {...dato}
        )
    );
  }

  return (
    <div className='idiomas'>
      <div className='bandera' onClick={() => sustituirIdioma(0)}><img src='../imagenes/spain.jpg' alt='España'></img></div>
      <div className='bandera' onClick={() => sustituirIdioma(1)}><img src='../imagenes/uk.png' alt='Inglaterra'></img></div>
      <div className='bandera' onClick={() => sustituirIdioma(2)}><img src='../imagenes/francia.png' alt='Francia'></img></div>
    </div>
  )
}

export default Idiomas