import { Link } from 'react-router-dom';
import logo from '../logo.png';
export default function Header() {
  return (
    <header>
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link className="logo" to="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '50px', height: '50px' }}
          />
          <h1 style={{ margin: 0, fontSize: '1.5rem', cursor: 'pointer' }}>
            Vadiño
          </h1>
        </Link>

        <Link to="/contact">
          <nav>
            <span className="material-symbols-outlined">mail</span>
          </nav>
        </Link>
      </div>
    </header>
  );
}
