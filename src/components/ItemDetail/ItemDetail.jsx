import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Intercambiabilidad from '../Intercambiabilidad/Intercambiabilidad'
import ItemCounts from '../ItemCounts/ItemCounts'
import './ItemDetail.css'

function ItemDetail({camiseta}) {
   const [ocultar, setOcultar] = useState(false)

   const handleOcultar=()=>{
    setOcultar(true)
}

  function onAdd(cant) {
    console.log(cant)
  }
  return (

    <Card bg="dark" className='detalle'>
        
  <Card.Header className="text-light">Detalle del Producto</Card.Header>
  <Card.Body>
  <Row className='align-items-center'>
    <Col md="auto"><Card.Img className="img" variant="top" src={camiseta.img} /> </Col>
    <Col md="auto"><Card.Title className="text-light">{camiseta.nombre} $ {camiseta.precio}</Card.Title>
    <Card.Text className="text-light">
      {camiseta.descripcion}
    </Card.Text>
    { ocultar === false ?  <ItemCounts initial={1} stock={10} onAdd ={onAdd} /> 
    : ''    
    } 
     <Intercambiabilidad stock={10} ocultar={handleOcultar}/>  
    </Col>
   
   
  </Row>

  
  
    
  </Card.Body>
</Card>
   
  )
}

export default ItemDetail