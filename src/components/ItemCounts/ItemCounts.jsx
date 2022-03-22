import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'

function ItemCounts({onAdd, stock, initial}) {

    const [count, setCount] = useState(initial)


    const agregarProducto =()=>{
        setCount (count + 1)
    }
    const restarProducto =()=>{
        setCount (count - 1)
    }

  return (
    <Card bg='dark'  className='mx-3' style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title className='text-light'>Camiseta Retro '95</Card.Title>
    <ListGroup>
  <ListGroup.Item><Button className='mx-4' onClick={restarProducto} disabled={count === initial ? true : null} variant="outline-danger">-</Button>{' '}{count}{' '}<Button className='mx-4' onClick={agregarProducto} disabled={count === stock ? true : null} variant="outline-danger">+</Button>{' '}</ListGroup.Item>
  
</ListGroup>
    <Button className='mt-2' onClick={() => onAdd(count)} disabled={ stock === 0 ? true : null} variant="danger">Agregar al carrito</Button>
  </Card.Body>
</Card>
  )
}

export default ItemCounts