import React, { useState } from 'react';
import Posts from './components/Posts';
import MainSection from './components/MainSection';


export default function App() {

  const [activeTab, setActiveTab] = useState('about');

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
        <button onClick={() => setActiveTab('about')} className={'button-87'}>
          Que es esta página?
        </button>
        <button onClick={() => setActiveTab('textos')} className={'button-87'}>
          Textos
        </button>
        <button onClick={() => setActiveTab('proyectos')} className={'button-87'}>
          Proyectos
        </button>
      </div>

      <MainSection activeTab={ activeTab } />

        
    </div>
  )
}
