import Header from '../components/Header';
import posts from '../data/posts.js';
import { useParams } from 'react-router-dom';

export default function PostView() {
  const { id } = useParams();
  const post = posts.find((post) => post.id === id);

  if (!post) {
    return <h2>Post not found.</h2>;
  }

  return (
    <>
      <Header />
      <div className="postview-container">
        <div className="postview">
          <h3>{post.date}</h3>
          <p>{post.description}</p>
        </div>
      </div>
    </>
  );
}
