import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    followers: '',
    minRepos: '',
    language: ''
  });
  const [userData, setUserData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await searchUsers(searchParams);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserClick = async (username) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const userDetails = await fetchUserData(username);
      setSelectedUser(userDetails);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h2>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Username Field */}
          <div className="space-y-2">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={searchParams.username}
              onChange={handleInputChange}
              placeholder="Enter GitHub username"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Location Field */}
          <div className="space-y-2">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="e.g., San Francisco"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Min Followers Field */}
          <div className="space-y-2">
            <label htmlFor="followers" className="block text-sm font-medium text-gray-700">
              Minimum Followers
            </label>
            <input
              type="number"
              id="followers"
              name="followers"
              value={searchParams.followers}
              onChange={handleInputChange}
              min="0"
              placeholder="e.g., 100"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Programming Language Field */}
          <div className="space-y-2">
            <label htmlFor="language" className="block text-sm font-medium text-gray-700">
              Primary Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={searchParams.language}
              onChange={handleInputChange}
              placeholder="e.g., JavaScript"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Searching...' : 'Search Users'}
          </button>
        </div>
      </form>

      {/* Status Messages */}
      {isLoading && (
        <div className="text-center py-4">
          <p className="text-gray-600">Searching for users...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-4">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      {/* Results Display */}
      {userData && userData.users && userData.users.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userData.users.map(user => (
            <div 
              key={user.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleUserClick(user.login)}
            >
              <div className="flex items-center gap-4">
                <img 
                  src={user.avatar_url} 
                  alt={user.login}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-bold">{user.login}</h3>
                  <a 
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedUser.avatar_url} 
                  alt={selectedUser.login}
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h2 className="text-xl font-bold">{selectedUser.name || selectedUser.login}</h2>
                  <p className="text-gray-600">@{selectedUser.login}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedUser(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Followers</p>
                <p className="font-bold">{selectedUser.followers}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Following</p>
                <p className="font-bold">{selectedUser.following}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Public Repos</p>
                <p className="font-bold">{selectedUser.public_repos}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-bold">{selectedUser.location || 'Not specified'}</p>
              </div>
            </div>
            
            {selectedUser.bio && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">Bio</p>
                <p>{selectedUser.bio}</p>
              </div>
            )}
            
            <a 
              href={selectedUser.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Full Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;


