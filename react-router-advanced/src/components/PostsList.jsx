import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import { ProfileDetails, ProfileSettings } from "./components/ProfileDetails";
import BlogPost from "./components/BlogPost";
import PostList from "./components/PostsList";

function App() {
  const [count, setCount] = useState(0);

  return (
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
          <Route path="profile" element={<Profile />}>
            {/* Nested routes for Profile subsections */}
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:postId" element={<BlogPost />} /> {/* Dynamic Route */}
        </Routes>
      </>
    </Router>
  );
}

export default App;