import React from 'react';
import imagen1 from "../../assets/img/imagen1.jpg"
import { Link } from 'react-router-dom';
import './Hero.css'; // Archivo de estilos CSS para el componente

function Hero() {
    const handleClick = () => {
      window.location.href = '/nueva-pagina';
    };
    const handleClickFace = () => {
        window.location.href = '/nueva-pagina';
    };
    const handleClickInsta = () => {
        window.location.href = '/nueva-pagina';
    };

    return (
        <div className="two-columns-container">
          <div className="column left-column">
            <div className='text-container'>
                <p>Hello, we are</p>
                <h1>TATTOOS</h1>
                <p>we are specialists in old school, blackwork, </p>
                <p>blackout and minimalist.</p>
                <h5>Location:</h5>
                <p>27 Merry Lane, New Jersey</p>
                <p>East Hanover, 08014</p>
            </div>
            <div className='btn-container'>
                <button className='btn-register' onClick={handleClick}>
                    Register your shift 
                </button> 
            </div>
            <div className='redes-container'>
                <button className='btn-redes' onClick={handleClickFace}>
                    Facebook 
                </button>
                <button className='btn-redes' onClick={handleClickInsta}>
                    Instagram  
                </button>  
            </div>
          </div>
          <div className="column right-column">
            {/* <img src={imagen1} alt="" /> */}
            <div className='rigth-colum-overlay'>
            </div>
          </div>
        </div>
      );
}

export default Hero;

