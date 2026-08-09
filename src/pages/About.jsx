import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import about from '../data/about.md?raw';
export default function PostView() {
  return (
    <>
      <Header />
      <div
        className="banner"
        style={{ paddingBottom: '1rem', marginBottom: '1rem' }}
      >
        <h1>Para que es esta página?</h1>
      </div>
      <div className="postview-container">
        <div className="postview">
          <ReactMarkdown>{about}</ReactMarkdown>
        </div>
      </div>
      <div
        className="banner"
        style={{ paddingBottom: '1rem', marginBottom: '1rem' }}
      >
        <h2 style={{ color: 'black' }}>
          Hecho con ReactJS{' '}
          <img
            style={{ width: '20px', height: 'auto' }}
            src="logos/react.webp"
            alt="React Logo"
          />
        </h2>
        <h2 style={{ color: 'black' }}>
          Hosteado en Cloudfare Pages{' '}
          <img
            style={{ width: '20px', height: 'auto' }}
            src="logos/cloudfare.png"
            alt="Cloudflare Logo"
          />
        </h2>
      </div>
    </>
  );
}
