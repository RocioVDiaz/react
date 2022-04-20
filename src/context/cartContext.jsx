import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [total, setTotal] = useState(0);
  const [cartList, setCartList] = useState([]);

  const addToCart = (item) => {
    const producto = cartList.find((element) => element.id === item.id);
    if (producto === undefined) {
      setCartList([...cartList, item]);
    } else {
      producto.cantidad = producto.cantidad + item.cantidad;
    }
  };

  const calcularTotal = () => {
    let suma=0
    if (cartList.length > 0) {
      for (let element in cartList) {
        suma= suma + cartList[element].precio * cartList[element].cantidad;
      }      
    }
    setTotal(suma)
  };

  const removeCart = () => {
    setCartList([]);
  };
  
  const removeItem = (indexToRemove) => {
    const updatedCart = cartList.filter((item, index) => index !== indexToRemove);
    setCartList(updatedCart);
  }


  return (
    <CartContext.Provider
      value={{
        total,
        cartList,
        addToCart,
        removeCart,
        calcularTotal,
        removeItem
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
