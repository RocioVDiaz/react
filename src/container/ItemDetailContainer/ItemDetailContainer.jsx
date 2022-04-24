import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const queryProd = doc(queryDb, "productos", detalleId);
    setTimeout(() => {
      getDoc(queryProd)
        .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
        .finally(() => setLoading(false));
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner animation="border" className="mt-5" variant="danger" />
      ) : (
        <ItemDetail camiseta={producto} />
      )}
    </>
  );
}

export default ItemDetailContainer;
