import React, {useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";
import { InputCount } from "../Buttons/InputCount";
import ItemCounts from "../ItemCounts/ItemCounts";
import "./ItemDetail.css";

function ItemDetail({ camiseta }) {
  const [ocultar, setOcultar] = useState(false);

  const handleOcultar = () => {
    setOcultar(true);
  };

  const {addToCart} = useCartContext()

  function onAdd(cant) {
    console.log(cant)
    addToCart({...camiseta, cantidad:cant})
  }
  return (
    <Card bg="dark" className="detalle">
      <Card.Header className="text-light">Detalle del Producto</Card.Header>
      <Card.Body>
        <Row className="align-items-center">
          <Col md="auto">
            <Card.Img className="img" variant="top" src={camiseta.img} />{" "}
          </Col>
          <Col md="auto">
            <Card.Title className="text-light">
              {camiseta.nombre} $ {camiseta.precio}
            </Card.Title>
            <Card.Text className="text-light">{camiseta.descripcion}</Card.Text>
            {ocultar === false ? (
              <ItemCounts initial={1} stock={10} onAdd={onAdd} ocultar= {handleOcultar}/>
            ) :<InputCount />}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;
