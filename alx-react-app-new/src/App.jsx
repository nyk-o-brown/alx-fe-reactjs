import { useState } from 'react'
import reactLogo from './react.svg'
import viteLogo from './vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage';
import Header from "./components/Header";

import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import UserContext from './UserContext';

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: 'Alice',
    age: 25,
    bio: 'Loves hiking and photography'
  };

  return (
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
      <div>
         <WelcomeMessage />
         <Header />
         <MainContent />
         <Footer />
         <UserContext.Provider value={userData}>
           <UserProfile />
           <UserProfile />
         </UserContext.Provider>
         <Counter />
      </div>
    </>
  )
}

export default App



