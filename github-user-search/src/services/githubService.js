import axios from 'axios';

const fetchUserData = async (username) => {
  try {
    // Make API call using axios
    const response = await axios.get(`https://api.github.com/users/${username}`);
    
    // Axios automatically throws errors for non-2xx responses
    // and parses JSON responses, so we can directly return the data
    console.log("User Data:", response.data);
    return response.data;
    
  } catch (error) {
    // Handle errors - Axios provides detailed error information
    console.error("Failed to fetch user data:", error.response?.data || error.message);
    throw error;
  }
};

export default fetchUserData;