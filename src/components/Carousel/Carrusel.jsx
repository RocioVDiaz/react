import React from 'react'
import { Carousel } from 'react-bootstrap'

function Carrusel() {
  return (
    <Carousel className="m-4">
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="./img/carrusel/independiente.jpg"
        alt="First slide"
      />
  
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="./img/carrusel/cancha.jpg"
        alt="Second slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./img/carrusel/copas.jpeg"
        alt="Third slide"
      />
     
    </Carousel.Item>
  </Carousel>
  )
}

export default Carrusel