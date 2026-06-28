import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Posts from './components/Posts';


export default function App() {

  return (
    <div className="app-shell">
      <header>
        <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem', cursor: 'pointer' }}>Vadiño</h1>
          <nav>
            <span className="contact material-symbols-outlined">mail</span>
          </nav>
        </div>
      </header>


      <div className="banner">
        <h1>El jardín digital del Vadiño</h1>
        <p>Pensamientos y cosas a medida que se me vayan ocurriendo</p>
      </div>

<div className="button-group">
<Link className="button-87" to="/about">
     Que es esta página?
</Link>

<Link className="button-87" to="/texts">
     Textos
</Link>

<Link className="button-87" to="/projects">
     Proyectos
</Link>
</div>

      <Routes>
              <Route path="/about" element={
                  <div className="about">
                    <h2>Que es esta página?</h2>
                  </div>} />
              <Route path="/texts" element={
                <Posts />} />
              <Route path="/projects" element={
                <div className="proyectos">
          <h2>Proyectos</h2>
        </div>} />
      </Routes>
            </div>
  );
}
