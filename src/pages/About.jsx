import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import about from '../data/about.md?raw';
export default function PostView() {
  return (
    <>
      <Header />
      <div className="postview-container">
        <div className="postview">
          <ReactMarkdown>{about}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
