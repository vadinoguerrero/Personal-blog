import Header from '../components/Header';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="postview-container">
        <div className="postview">
          <h1>404 - Página no encontrada</h1>
          <p>
            O la página que queres acceder fue borrada, o está mal escrito el
            link
          </p>
        </div>
      </div>
    </>
  );
}
