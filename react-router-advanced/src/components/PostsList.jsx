// src/components/PostList.jsx
import { Link } from "react-router-dom";

const PostList = () => {
  const posts = [
    { id: 1, title: "First Post" },
    { id: 2, title: "Second Post" },
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
