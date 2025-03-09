import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';
import Counter from './Counter';
import UserContext from './UserContext';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: 'Alice',
    age: 25,
    bio: 'Loves hiking and photography'
  };

  return (
    <Router>
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
      <UserContext.Provider value={userData}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;