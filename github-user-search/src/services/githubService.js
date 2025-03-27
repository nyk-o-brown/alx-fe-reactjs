import axios from 'axios';

const searchUsers = async (params) => {
  try {
    let query = [];
    
    // Only add non-empty values to the query
    if (params.username?.trim()) {
      query.push(params.username.trim());
    }
    if (params.location?.trim()) {
      query.push(`location:${params.location.trim()}`);
    }
    if (params.followers && Number(params.followers) > 0) {
      query.push(`followers:>=${params.followers}`);
    }
    if (params.minRepos && Number(params.minRepos) > 0) {
      query.push(`repos:>=${params.minRepos}`);
    }
    if (params.language?.trim()) {
      query.push(`language:${params.language.trim()}`);
    }
    
    // Only proceed if we have at least one search parameter
    if (query.length === 0) {
      throw new Error('Please provide at least one search criteria');
    }

    const queryString = encodeURIComponent(query.join(' '));
    
    const response = await fetch(`https://api.github.com/search/users?q=${queryString}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    return {
      users: data.items,
      totalCount: data.total_count
    };
  } catch (error) {
    console.error("Search error:", error);
    throw error;
  }
};

export { searchUsers };