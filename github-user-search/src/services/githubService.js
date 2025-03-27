// Define the function
const fetchUserData = async (username) => {
    try {
      // Construct the API endpoint using the username
      const apiUrl = `https://api.github.com/users/${username}`;
      
      // Make the API call
      const response = await fetch(apiUrl);
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      
      // Parse the JSON response
      const userData = await response.json();
      
      // Return or log the user data
      console.log("User Data:", userData);
      return userData;
    } catch (error) {
      // Handle errors
      console.error("Failed to fetch user data:", error.message);
      return null;
    }
  };
  
  // Example usage
  fetchUserData('octocat') // Replace 'octocat' with any GitHub username
    .then((data) => {
      if (data) {
        console.log(`GitHub user ${data.login} fetched successfully.`);
      }
    });