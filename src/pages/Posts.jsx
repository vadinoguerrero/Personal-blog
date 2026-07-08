import { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ReactMarkdown from 'react-markdown';
import loadPosts from '../lib/loadPosts.js';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function getPosts() {
      const loadedPosts = await loadPosts();
      const sortedPosts = loadedPosts.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );
      setPosts(sortedPosts);
    }

    getPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    if (!search.trim()) return posts;

    const query = search.toLowerCase();

    return posts.filter((post) => post.content.toLowerCase().includes(query));
  }, [posts, search]);

  function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');

    return `${Number(day)}/${Number(month)}/${year.slice(2)}`;
  }

  return (
    <div className="posts">
      <Header />
      <div className="banner">
        <h1>Notas y pensamientos</h1>
        <p>
          Momentos de claridad donde lo que pienso amerita ser escrito para
          poder recordarlo
        </p>
      </div>
      <div className="search-bar">
        <span class="search-icon material-symbols-outlined">search</span>
        <input
          type="text"
          placeholder="Buscar.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="postsgrid">
        {filteredPosts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div className="post">
              <h3>{formatDate(post.date)}</h3>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
