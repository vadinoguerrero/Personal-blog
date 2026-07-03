import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import loadPosts from '../lib/loadPosts.js';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const loadedPosts = await loadPosts();
      setPosts(loadedPosts);
    }

    getPosts();
  }, []);

  return (
    <div className="posts">
      <Header />
      <div className="postsgrid">
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div className="post">
              <h3>{post.date}</h3>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
