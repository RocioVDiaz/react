import { Link } from "react-router-dom"


export const InputCount= ()=> {
    return (
        <>
        <Link to='/carrito'>
           <button
               className='btn btn-outline-danger'
               onClick={()=>console.log('ir a cart')}
               >Ir al Carrito</button>
        </Link>
        
        <Link to='/'>
           <button
               className='btn btn-outline-danger mx-2'
               onClick={()=>console.log('ir a home')}
               >Seguir comprando</button>
         </Link>      
        </>
    )
}