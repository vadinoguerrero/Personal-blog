import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { nanoid } from 'nanoid';

function generateId() {
  console.log(nanoid(8));
}

export default function Home() {
  return (
    <div className="app-shell">
      <Header />

      <div className="banner">
        <h1>El jardín digital del Vadiño</h1>
        <p>Un lugar donde guardar y mostrar todo lo que se me ocurra</p>
      </div>

      <div className="button-group">
        {/* <button onClick={generateId} className="button-87">
          Generar ID
        </button> */}
        <Link className="button-87" to="/about">
          Que poronga es esta página?
        </Link>

        <Link className="button-87" to="/posts">
          Notas y pensamientos
        </Link>

        <Link className="button-87" to="/projects">
          Proyectos de programación
        </Link>
      </div>
    </div>
  );
}
