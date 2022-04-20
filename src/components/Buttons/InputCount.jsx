import { Link } from "react-router-dom"


export const InputCount= ()=> {
    return (
        <>
        <Link to='/carrito'>
           <button
               className='btn btn-outline-danger'
               >Ir al Carrito</button>
        </Link>
        
        <Link to='/'>
           <button
               className='btn btn-outline-danger mx-2'
               >Seguir comprando</button>
         </Link>      
        </>
    )
}