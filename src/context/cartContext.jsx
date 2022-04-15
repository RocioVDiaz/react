import { createContext, useContext, useState } from "react";


const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

function CartContextProvider({children}){

const [cartList, setCartList] = useState([])


const addToCart = (item) =>{
    console.log(item)
    const producto = cartList.find(element => element.id === item.id)
    if (producto === undefined) {
        setCartList([
            ...cartList,
            item
        ])
    } else{
        producto.cantidad = producto.cantidad + item.cantidad
       
    }
     
}

const removeCart = () => {
    setCartList([])
}

    return(
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            removeCart
        }}>
         {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider