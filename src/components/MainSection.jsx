import React, { useState } from 'react';
import Posts from './Posts';

const MainSection = ({ activeTab }) => {
  

  return (
    <div className="mainsection">
      {activeTab === 'about' && (
        <div className="about">
          <h2>Que es esta página?</h2>
        </div>
      )}
      {activeTab === 'textos' && (
        <Posts />
      )}
      {activeTab === 'proyectos' && (
        <div className="proyectos">
          <h2>Proyectos</h2>
        </div>
      )}
    </div>
  );
};

export default MainSection;
