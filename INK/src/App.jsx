import { useState } from 'react'
import Header from './Components/Layout/Header'
import Hero from './Components/Layout/Hero';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Artists from './Components/Layout/Artists';
import CarouselEmployees from '../src/Components/Layout/CarouselTarjets';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header-container'>
        <Header/>
      </div>
      <div className='hero-container'>
        <Hero/>
        <Artists/>
        <CarouselEmployees/>
      </div>
    </>
  )
}

export default App
