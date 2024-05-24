import { useState } from 'react'
import Header from './Components/Layout/Header'
import Hero from './Components/Layout/Hero';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header-container'>
        <Header/>
      </div>
      <div className='hero-container'>
        <Hero/>
      </div>
    </>
  )
}

export default App
