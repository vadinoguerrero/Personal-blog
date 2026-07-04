import { Link } from 'react-router-dom';

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
        <Link to="/">
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
