import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
   Button,
  Card,
  Col,  
  Row,  
} from "react-bootstrap";
import { useCartContext } from "../../context/cartContext";
import AlertCart from "../AlertCart/AlertCart";
import Forms from "../Form/Form";
import TableCart from "../TableCart/TableCart";
import "./cart.css";

function Cart() {
  const { total, cartList, removeCart, calcularTotal, removeItem } =
    useCartContext();
  const [formData, setFormData] = useState(
      {
          email: '',
          phone: '',
          name: '',
      }
  )

  const generarOrden = async (e) => {
    e.preventDefault();
    let orden = {};
    orden.buyer = { name: "Rocio", email: "r@gmail.com", phone: "00012151315" };
    orden.total = total;

    orden.items = cartList.map((cartItem) => {      
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const precio = cartItem.precio * cartItem.cantidad;
      const cantidad = cartItem.cantidad;
      return { id, nombre, precio, cantidad };
    });
    
    const db = getFirestore();
    const queryCollection = collection(db, "orders");
    await addDoc(queryCollection, orden).then(({ id }) => console.log(id));

    const queryCollectionStock = collection(db, "productos");

    const queryActualizarStock = await query(
      queryCollectionStock,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActualizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((producto) => producto.id === res.id).cantidad,
          })
        )
      )
      .finally(() => console.log("actualizado"));

    batch.commit();
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    removeItem(index);
  };

  useEffect(() => {
    calcularTotal();
  }, [cartList]);

  return (
    <div>
      {cartList.length === 0 ? (<AlertCart/>
       
      ) : (
        <Card bg="dark" className="m-5">
          <Card.Header className="text-light" as="h5">
            Carrito
          </Card.Header>
          <Card.Body>
            <TableCart cartList={cartList} handleClick={handleClick} total={total}/>
          </Card.Body>
          <Row className="mb-3">
            <Col>
              <Button variant="danger" onClick={removeCart}>
                vaciar carrito
              </Button>
            </Col>
            <Col>
              <Button variant="success" onClick={generarOrden}>
                confirmar compra
              </Button>
            </Col>
          </Row>
          <Forms formData={formData} setFormData={setFormData}/>
        </Card>

      )}
    </div>
  );
}

export default Cart;
