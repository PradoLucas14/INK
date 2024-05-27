import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TarjetsArtist.css"

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className='img-container-card'>
        <img src={employee.fotoDePerfil} alt={employee.nombre} />
      </div>
      <div className='text-container-card'>
        <p className='name'>{employee.nombre}</p>
        <p className='descripcion'>{employee.descripcion}</p>
        <button>View profile</button>
      </div>
    </div>
  );
};

export default EmployeeCard;


