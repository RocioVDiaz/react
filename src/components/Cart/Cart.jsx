import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";

function Cart() {
  const { total, cartList, removeCart, calcularTotal, removeItem } =
    useCartContext();

  const handleClick = (e, index) => {
    e.preventDefault();
    removeItem(index);
  };

  useEffect(() => {
    calcularTotal();
  }, [cartList]);

  return (
    <div>
      {cartList.length === 0 ? (
        <Card bg="dark" className="m-5">
          {" "}
          <Alert className="m-4 " variant="danger">
            <Alert.Heading>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-cart-x-fill mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
              </svg>{" "}
              Su carrito está vacío!
            </Alert.Heading>
            <hr />
            <div className="d-flex justify-content-end">
              <Link to="/">
                <button
                  className="btn btn-outline-danger mx-2"
                >
                  Seguir comprando
                </button>
              </Link>
            </div>
          </Alert>{" "}
        </Card>
      ) : (
        <Card bg="dark" className="m-5">
          <Card.Header className="text-light" as="h5">
            Carrito
          </Card.Header>
          <Card.Body>
            <Table variant="light" responsive striped hover>
              <thead>
                <tr>
                  <th>Productos</th>
                  <th>Descripcion</th>
                  <th>Precio Unitario</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((prod, index) => (
                  <tr key={index}>
                    <td>
                      <img className="camiseta" src={prod.img}></img>
                    </td>
                    <td>
                      <Container>
                        <Row className="text-danger fw-bold">{prod.nombre}</Row>
                        <Row>{prod.descripcion}</Row>
                      </Container>
                    </td>
                    <td>{prod.precio}</td>
                    <td>{prod.cantidad}</td>
                    <td>{prod.precio * prod.cantidad}</td>
                    <td>
                      {" "}
                      <Button
                        variant="outline-danger"
                        onClick={(e) => handleClick(e, index)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="mb-1 bi bi-x-square-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                        </svg>
                      </Button>{" "}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan={4}>Precio Final</td>
                  <td>$ {total}</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
          <Button variant="danger" onClick={removeCart}>
            vaciar carrito
          </Button>
        </Card>
      )}
    </div>
  );
}

export default Cart;
