import { useState } from 'react'
import Header from './Components/Layout/Header'
import Hero from './Components/Layout/Hero';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Artists from './Components/Layout/Artists';
{/*import EmployeeCard from './Components/Layout/TarjetsArtist';*/}
import CarouselEmployees from '../src/Components/Test/Test1';


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
        {/*EmployeeCard*/}
        <CarouselEmployees/>
      </div>
    </>
  )
}

export default App
