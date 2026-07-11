import Header from '../components/Header';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_69uxh07',

        'template_hhwikl9',

        form.current,

        '9nGBdzZxxqxYkWere',
      );

      setStatus('success');

      form.current.reset();
    } catch (error) {
      console.error(error);

      setStatus('error');
    }
  };

  return (
    <>
      <Header />

      <div className="banner">
        <h1>Contactame</h1>
        <p>
          Si algo de lo que escribo resuena contigo, o queres hablar de lo que
          sea, mandame un correo y te voy a contestar
        </p>
      </div>
      <div className="contact">
        <div className="postview">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label htmlFor="name">
              Nombre:
              <input type="text" required name="name" />
            </label>

            <label htmlFor="email">
              E-Mail:
              <input type="email" id="email" name="email" required />
            </label>

            <label htmlFor="message">
              Mensaje:
              <textarea id="message" name="message" required></textarea>
            </label>

            <button className="button-87" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          {status === 'success' && <p>Mensaje enviado</p>}
        </div>
      </div>
    </>
  );
}
