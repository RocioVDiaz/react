import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import { Col, Row, Spinner } from "react-bootstrap";

function ItemList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  console.log(productos);

  return (
    <>
    {(loading)? <Spinner animation="border" variant="danger" />:<div><Row xs={1} md={3} className="g-4 m-5">

    {productos.map((producto) => (
        <Col>
      <div key={producto.id}  >
        <Item  camiseta={producto} />
      </div>
      </Col>
    ))}
    </Row>
  </div>}
  </>
  );
}

export default ItemList;
