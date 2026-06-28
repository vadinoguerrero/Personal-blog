import React from 'react';

function Header() {
  return (
    <header style={{ padding: '1rem ', backgroundColor: '#282c34', color: '#fff',  boxShadow: '0px 50px #000', zIndex:'10' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Personal Blog</h1>
        <nav>
          <a href="/" style={{ color: '#61dafb', textDecoration: 'none', marginRight: '1rem' }}>Home</a>
          <a href="/about" style={{ color: '#61dafb', textDecoration: 'none' }}>About</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
