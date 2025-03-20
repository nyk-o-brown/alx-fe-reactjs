// src/components/Login.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./src/Auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login(); // Simulate login
    navigate("/profile"); // Redirect to Profile after login
  };

  return (
    <div>
      <h1>   helloooooo to my Login Page</h1>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
