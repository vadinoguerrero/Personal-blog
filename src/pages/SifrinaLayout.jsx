import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Toast from '../components/Toast.jsx';
import useToast from '../components/useToast.jsx';
import Header from '../components/Header';

export default function SifrinaLayout() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast, showToast } = useToast();

  async function handleSubmit(e) {
    e.preventDefault();

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
        showToast('Contraseña incorrecta');
        return;
      }

      setAuthenticated(true);
    } catch (error) {
      showToast('Ocurrió un error. Intentá nuevamente.');
    } finally {
      setLoading(false);
    }
  }
  // autenticación...

  if (!authenticated) {
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
        {toast && <Toast message={toast} />}
      </div>
    );
  } else {
    return (
      <div className="sifrina-container">
        <Outlet />
      </div>
    );
  }
}
