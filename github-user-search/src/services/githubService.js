import axios from 'axios';

const searchUsers = async (params) => {
  try {
    let query = [];
    
    if (params.username) query.push(params.username);
    if (params.location) query.push(`location:${params.location}`);
    if (params.followers) query.push(`followers:>=${params.followers}`);
    if (params.repos) query.push(`repos:>=${params.repos}`);
    if (params.language) query.push(`language:${params.language}`);
    
    const queryString = encodeURIComponent(query.join(' '));
    
    const response = await axios.get(`https://api.github.com/search/users?q=${queryString}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    return {
      users: response.data.items,
      totalCount: response.data.total_count
    };
  } catch (error) {
    console.error("Failed to search users:", error.response?.data || error.message);
    throw error;
  }
};

export { searchUsers };