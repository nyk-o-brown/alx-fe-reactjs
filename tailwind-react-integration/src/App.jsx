import { useState } from 'react'
import './index.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-200">
      <UserProfile />
    </div>
  )
}

export default App
