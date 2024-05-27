import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import EmployeeCard from './TarjetsArtist';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CarouselTarjets.css"


const CarouselEmployees = () => {
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

  const groupEmployees = (employees, size) => {
    const grouped = [];
    for (let i = 0; i < employees.length; i += size) {
      grouped.push(employees.slice(i, i + size));
    }
    return grouped;
  };

  const groupedEmployees = groupEmployees(employees, 3);

  return (
    <Carousel className='carousel'>
      {groupedEmployees.map((group, idx) => (
        <Carousel.Item key={idx}>
          <div className='carousel-card'>
            {group.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselEmployees;
