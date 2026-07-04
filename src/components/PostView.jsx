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
          <h3>
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'numeric',
              year: '2-digit',
            })}
          </h3>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </>
  );
}
