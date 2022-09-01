import './App.css';
import Provider from './componentes/contexto/Provider.jsx';
import Idiomas from './componentes/Idiomas.jsx';
import Pagina from './componentes/Pagina.jsx';

function App() {
  return (
    <Provider>
      <div className='container'>
        <div className='banderas'>
          <Idiomas/>
        </div>

        <div className='contenido'>
          <Pagina/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
