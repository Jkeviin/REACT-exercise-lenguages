import React from 'react'
import Profesora from './Profesora.jsx'
import Ubicacion from './Ubicacion.jsx'

function Pagina() {
  return (
    <>
        <h1>Titulo</h1>
        <h2>Subtitulo</h2>
        <div className='botones'>
            <button>Boton 1</button>
            <button>Boton 2</button>
        </div>
        <Profesora />
        <Ubicacion />
    </>
  )
}

export default Pagina