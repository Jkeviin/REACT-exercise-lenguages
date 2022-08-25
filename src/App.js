import './App.css';
import Idiomas from './componentes/Idiomas.jsx';
import Pagina from './componentes/Pagina.jsx';

function App() {
  return (
    <>
      <div className='banderas'>
        <Idiomas/>
      </div>

      <div className='contenido'>
        <Pagina/>
      </div>
    </>
  );
}

export default App;
