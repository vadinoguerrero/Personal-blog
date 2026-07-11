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
    </>
  );
}
