// src/auth.js
export const isAuthenticated = () => {
    // Simulate user authentication; return `true` if logged in and `false` otherwise.
    return !!localStorage.getItem("user");
  };
  
  export const login = () => {
    // Simulate logging in
    localStorage.setItem("user", "loggedIn");
  };
  
  export const logout = () => {
    // Simulate logging out
    localStorage.removeItem("user");
  };
  