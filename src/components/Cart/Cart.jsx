import React from "react";
import { Alert, Button, Card, Container, Row, Table } from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";
import "./cart.css";

function Cart() {
  const { cartList, removeCart } = useCartContext();
  console.log(cartList);

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
                  </tr>
                ))}
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
