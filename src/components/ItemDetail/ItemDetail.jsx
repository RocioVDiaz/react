import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import './ItemDetail.css'

function ItemDetail({camiseta}) {
  return (

    <Card bg="dark" className='detalle'>
        
  <Card.Header className="text-light">Detalle del Producto</Card.Header>
  <Card.Body>
  <Row className='align-items-center'>
    <Col md="auto"><Card.Img className="img" variant="top" src={camiseta.img} /> </Col>
    <Col md="auto"><Card.Title className="text-light">{camiseta.nombre} $ {camiseta.precio}</Card.Title>
    <Card.Text className="text-light">
      {camiseta.descripcion}
    </Card.Text></Col>
  </Row>
  
    
    
  </Card.Body>
</Card>
   
  )
}

export default ItemDetail