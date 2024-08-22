import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './page/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>segunda rama con home</h1>
      </div>
      <Home />
    </>
  )
}

export default App
