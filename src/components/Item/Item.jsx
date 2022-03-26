import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import './Item.css'

function Item({ camiseta }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="imagen" variant="top" src={camiseta.img} />
        <Card.Body>
          <Card.Title>{camiseta.nombre}</Card.Title>
          <Card.Text>$ {camiseta.precio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
