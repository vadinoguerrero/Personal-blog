import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Sifrina() {
  return (
    <div className="app-shell">
      <Header />
      <div className="banner">
        <h1>Angélica y Vadiño❤️</h1>
        <p>
          Como sé que no podes tener cosas nuestras en tu celular, hice esto
          para que puedas entrar y verlas cuando quieras.
        </p>
      </div>
      <div className="button-group">
        <Link className="button-87" to="/sifrina/posts">
          Textos que te he escrito
        </Link>
        <Link className="button-87" to="/sifrina/photos">
          Fotos
        </Link>
      </div>
    </div>
  );
}
