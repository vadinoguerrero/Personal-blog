import React from 'react';
import posts from '../data/posts.js';

const Posts = () => {
  return (
    <div className="postsgrid">    
          {posts.map((post) => (
            <div className="post" key={post.date}>
              <h3>{post.date}</h3>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
  );
};

export default Posts;
