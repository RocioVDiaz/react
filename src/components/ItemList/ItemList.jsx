import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { getFetch } from "../helpers/getFetch";
import { Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function ItemList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true)
  const {indumentariaId} = useParams()

  useEffect(() => {

    if (indumentariaId) {
      getFetch
      .then((resp) => setProductos(resp.filter(item => item.categoria === indumentariaId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
      
    } else {
      getFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }

  
  }, [indumentariaId]);
  

  return (
    <>
    {(loading)? <Loading/>:<div><Row xs={1} md={3} className="g-4 mx-5 mt-5 pb-5">

    {productos.map((producto) => (
        <Col key={producto.id}>
      <div >
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
