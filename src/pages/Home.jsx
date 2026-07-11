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
        <h1>El rincón de Vadiño</h1>
        <p>
          Un lugar donde comparto ideas, pensamientos y cosas que guardan
          significado para mi.
        </p>
      </div>

      <div className="button-group">
        {/* <button onClick={generateId} className="button-87">
          Generar ID
        </button> */}
        <Link className="button-87" to="/about">
          Que es esta página?
        </Link>

        <Link className="button-87" to="/posts">
          Notas y pensamientos
        </Link>

        <Link className="button-87" to="/songs">
          Canciones y letras
        </Link>

        <Link className="button-87" to="/projects">
          Proyectos de programación
        </Link>
      </div>
    </div>
  );
}
