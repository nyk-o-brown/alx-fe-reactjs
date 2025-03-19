// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams(); // Extracts the dynamic part of the URL

  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is the content for blog post with ID: {postId}.</p>
      {/* You can fetch and display actual post data here based on the postId */}
    </div>
  );
};

export default BlogPost;
