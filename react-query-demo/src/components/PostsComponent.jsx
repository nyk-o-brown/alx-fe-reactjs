import React, { useState } from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isError, isLoading, error } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5, // 5 minutes
    staleTime: 1000 * 60 * 1, // 1 minute
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  const [showState, setShowState] = useState(false);

  const handleShowState = () => {
    setShowState(!showState);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleShowState} style={{ padding: '10px', backgroundColor: '#333', color: '#fff', border: 'none', borderRadius: '5px' }}>
        {showState ? 'Hide State' : 'Show State'}
      </button>
      {showState && (
        <div>
          <h3>App State</h3>
          <pre>{JSON.stringify({ data, isError, isLoading, error }, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PostsComponent;