import React from "react";
import Item from "../Item/Item";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { indumentariaId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, "productos");

    if (indumentariaId) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", indumentariaId)
      );
      getDocs(queryFilter)
        .then((resp) =>
          setProductos(
            resp.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .finally(() => setLoading(false));
    } else {
      getDocs(queryCollection)
        .then((resp) =>
          setProductos(
            resp.docs.map((item) => ({ id: item.id, ...item.data() }))
          )
        )
        .finally(() => setLoading(false));
    }
  }, [indumentariaId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Row xs={1} md={3} className="g-4 mx-5 mt-5 pb-5">
            {productos.map((producto) => (
              <Col key={producto.id}>
                <div>
                  <Item camiseta={producto} />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
}

export default ItemList;
