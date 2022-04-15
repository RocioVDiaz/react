import React from 'react'
import Button from "react-bootstrap/Button";

const ButtonCount= ({stock, onAdd, ocultar, count}) =>{
   
   const handleClick= () => {
       onAdd (count)
       ocultar()
   }
   
    return <Button 
    className="mt-2"
               onClick={handleClick}
               disabled={stock === 0 ? true : null}
               variant="danger"
           >Agregar al Carrito</Button>
}

export default ButtonCount