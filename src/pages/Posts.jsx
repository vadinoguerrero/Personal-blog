import { Link } from 'react-router-dom';
import Header from '../components/Header';
import posts from '../data/posts.js';

const Posts = () => {
  return (
    <div className="posts">
      <Header />
      <div className="postsgrid">
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div className="post">
              <h3>{post.date}</h3>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
