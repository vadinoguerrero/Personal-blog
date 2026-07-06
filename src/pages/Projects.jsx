import Header from '../components/Header';

export default function Projects() {
  return (
    <div className="projects">
      <Header />
      <div className="banner">
        <h1>Proyectos de programación</h1>
        <p>
          Sitios web con los que he practicado en mi proceso de auto-aprendizaje
          a lo largo de los años
        </p>
      </div>
      <div className="projects-container">
        <div className="manteinance postview">
          <h2>En mantenimiento</h2>
          <p>Ya los voy a agregar un dia de estos</p>
        </div>
      </div>
    </div>
  );
}
