import { useEffect, useState } from 'react';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import loadPosts from '../lib/loadPosts.js';
import { useParams } from 'react-router-dom';
import Toast from '../components/Toast.jsx';
import useToast from '../components/useToast.jsx';

export default function PostView() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { toast, showToast } = useToast();

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

  async function sharePost() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          url,
        });
      } catch (err) {
        // User cancelled
        console.error(err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      showToast('Link copiado!');
    }
  }

  function formatDate(dateString) {
    return new Intl.DateTimeFormat('es-UY', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(dateString));
  }

  return (
    <>
      <Header />

      <div className="postview-container">
        <div className="postview">
          <h3>{formatDate(post.date)}</h3>
          <ReactMarkdown>{post.content}</ReactMarkdown>
          <span className="share material-symbols-outlined" onClick={sharePost}>
            share
          </span>
        </div>
      </div>
      {toast && <Toast message={toast} />}
    </>
  );
}
