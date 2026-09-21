import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import loadPosts from '../lib/loadPosts.js';
import { useParams } from 'react-router-dom';
import Toast from '../components/Toast.jsx';
import useToast from '../components/useToast.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function PostView({ type }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { toast, showToast } = useToast();

  useEffect(() => {
    async function fetchPost() {
      const loadedPost = await loadPosts(type, id);
      setPost(loadedPost);
    }

    fetchPost();
  }, [id, type]);

  function toggleAudio() {
    if (post.audio) {
      if (playing) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }

      setPlaying(!playing);
    } else {
      showToast('No hay audio disponible para este post.');
    }
  }

  if (!post) {
    return <NotFound />;
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
    <div className={type === 'sifrina' ? 'sifrina-container' : ''}>
      <Header />

      <div className="postview-container">
        <div className="postview">
          <h3>{formatDate(post.date)}</h3>
          <ReactMarkdown>{post.content}</ReactMarkdown>
          <span className="share material-symbols-outlined" onClick={sharePost}>
            share
          </span>
          {post.audio && (
            <span
              className="read-aloud material-symbols-outlined"
              onClick={toggleAudio}
            >
              {playing ? 'auto_read_pause' : 'auto_read_play'}
            </span>
          )}
          <audio
            ref={audioRef}
            src={`/audio/${id}.mp3`}
            onEnded={() => setPlaying(false)}
          />
        </div>
      </div>
      {toast && <Toast message={toast} />}
    </div>
  );
}
