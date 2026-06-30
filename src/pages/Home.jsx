import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="app-shell">
      <Header />

      <div className="banner">
        <h1>El jardín digital del Vadiño</h1>
        <p>Pensamientos y cosas a medida que se me vayan ocurriendo</p>
      </div>

      <div className="button-group">
        <Link className="button-87" to="/about">
          Que es esta página?
        </Link>

        <Link className="button-87" to="/posts">
          Textos
        </Link>

        <Link className="button-87" to="/projects">
          Proyectos
        </Link>
      </div>
    </div>
  );
}
