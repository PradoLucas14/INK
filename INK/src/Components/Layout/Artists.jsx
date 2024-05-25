import React from 'react';
import './Artists.css'; // Archivo de estilos CSS para el componente

function Artists() {
    return (
        <div className='Artists'>
            <h2>Artists</h2>
            <div className="colum-container">
                <div className="colum-one">
                    <div className='colum-one-img'>
                        <div className='img-overlay'></div>
                    </div>
                </div>
                <div className="colum-two">
                    <p>In our tattoo studio, we take pride in having a team of expert tattoo artists. 
                    Each artist on our team is a master of their craft, with years of experience and undeniable talent. 
                    Their dedication to perfection and passion for the art of tattooing sets them apart as some of the best in the industry. 
                    In our studio, you can trust the skill and creativity of our talented team to bring your ideas to life with precision and style. 
                    With our expert tattoo artists, each tattoo is a unique and memorable work of art.</p>
                </div>
            </div>
        </div>
    );
}

export default Artists;
