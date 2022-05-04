import React from 'react'
import { Button, Container, Row, Table } from 'react-bootstrap'

function TableCart({cartList, handleClick, total}) {
  return (
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
  )
}

export default TableCart