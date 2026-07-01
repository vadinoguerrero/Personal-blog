import Header from '../components/Header';

export default function Contact() {
  return (
    <div className="contact">
      <Header />
      <h1>Contacto</h1>

      <div className="form-container">
        <form>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
