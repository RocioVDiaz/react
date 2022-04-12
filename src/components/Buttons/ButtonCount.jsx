import React from 'react'
import Button from "react-bootstrap/Button";

const ButtonCount= ({handleInter, stock}) =>{
    return <Button 
    className="mt-2"
               onClick={handleInter}
               disabled={stock === 0 ? true : null}
               variant="danger"
           >Agregar al Carrito</Button>
}

export default ButtonCount