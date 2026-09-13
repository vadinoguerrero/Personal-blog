import { Link } from 'react-router-dom';
import Header from '../components/Header';

import { useState } from 'react';

export default function Sifrina() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/sifrina-auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError('Contraseña incorrecta');
        return;
      }

      setAuthenticated(true);
    } catch (error) {
      setError('Ocurrió un error. Intentá nuevamente.');
    } finally {
      setLoading(false);
    }
  }

  if (authenticated) {
    return (
      <div className="sifrina-container">
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
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="banner">
        <h1>Ingresa la contraseña</h1>
        <p>Para acceder a esta sección, necesitás la contraseña que te dí.</p>
      </div>
      <div className="postview-container">
        <div className="postview">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Comprobando...' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>

      {error && <p>{error}</p>}
    </div>
  );
}
