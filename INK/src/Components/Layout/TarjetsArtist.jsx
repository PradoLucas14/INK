import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./TarjetsArtist.css"

const EmployeeCard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/tatuadores');
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='container-list'>
        <div className="employee-card-container">
            {employees.map(employee => (
            <div key={employee.id} className="employee-card">
                <div className='img-container-card'>
                    <img src={employee.fotoDePerfil} alt={employee.nombre} />
                </div>
                <div className='text-container-card'>
                    <p className='name'>{employee.nombre}</p>
                    <p className='descripcion'>{employee.descripcion}</p>
                    <button>View profile</button>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
};

export default EmployeeCard;


