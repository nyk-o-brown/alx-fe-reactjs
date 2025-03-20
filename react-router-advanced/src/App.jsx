import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { ProfileDetails, ProfileSettings } from "./components/ProfileDetails";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AuthProvider>
      <Router>
        <>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
              {/* Nested routes for Profile subsections */}
              <Route path="/profile/details" element={<ProfileDetails />} />
              <Route path="/profile/settings" element={<ProfileSettings />} />
            </Route>
            <Route path="/blog/:id" element={<BlogPost />} /> {/* Dynamic Route */}
          </Routes>
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
