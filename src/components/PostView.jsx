import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import loadPosts from '../lib/loadPosts.js';
import { useParams } from 'react-router-dom';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const loadedPost = await loadPosts(id);
      setPost(loadedPost);
    }

    fetchPost();
  }, [id]);

  if (!post) {
    return <h2>Post not found.</h2>;
  }

  return (
    <>
      <Header />

      <div className="postview-container">
        <div className="postview">
          <h3>{post.attributes.date}</h3>
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
