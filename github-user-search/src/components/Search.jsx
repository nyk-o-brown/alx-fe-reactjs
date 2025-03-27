import React, { useState } from 'react';
import fetchUserData from '../services/githubService'; // Import the service function

const GitHubForm = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Reset states
    setIsLoading(true);
    setError(null);
    setUserData(null);
  
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Enter GitHub Username</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            id="github-username"
            value={username}
            onChange={handleInputChange}
            placeholder="Enter GitHub username"
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-4">
          <p className="text-gray-600">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-4">
          <p className="text-red-500">Looks like we can't find the user/"Looks like we cant find the user"</p>
        </div>
      )}

      {/* Success State */}
      {userData && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-6">
            <img 
              src={userData.avatar_url} 
              alt={userData.login}
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold">{userData.name || userData.login}</h3>
              <p className="text-gray-600">@{userData.login}</p>
              <a 
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Profile
              </a>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Followers</p>
              <p className="text-xl font-bold">{userData.followers}</p>
            </div>
            <div>
              <p className="text-gray-600">Following</p>
              <p className="text-xl font-bold">{userData.following}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubForm;