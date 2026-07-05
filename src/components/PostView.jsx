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

  async function sharePost() {
    const url = window.location.href;
    console.log(navigator.share);
    if (navigator.share) {
      try {
        await navigator.share({
          url,
        });
        console.log('Post shared successfully!');
      } catch (err) {
        // User cancelled
        console.error(err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      console.log('Link copied to clipboard!');
      alert('Link copied to clipboard!');
    }
  }

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');

    return `${Number(day)}/${Number(month)}/${year.slice(2)}`;
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
    </>
  );
}
