import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import { Col, Row } from "react-bootstrap";

function ItemList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => console.log("siempre al último"));
  }, []);
  console.log(productos);

  return (
    <div><Row xs={1} md={3} className="g-4 m-5">

      {productos.map((producto) => (
          <Col>
        <div key={producto.id}  >
          <Item  camiseta={producto} />
        </div>
        </Col>
      ))}
      </Row>
    </div>
  );
}

export default ItemList;
