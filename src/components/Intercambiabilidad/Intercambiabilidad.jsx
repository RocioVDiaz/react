import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonCount from '../Buttons/ButtonCount'

 const InputCount= ()=> {
     return (
         <>
         <Link to='/cart'>
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


const Intercambiabilidad = ({ocultar, stock}) =>{
    const [inputType, setInputType] = useState('button')

    const handleInter=()=>{
        setInputType('input');
        ocultar();
    }

    return (
        <div>
         
            {
                inputType === 'button' ?
                  <ButtonCount stock={stock} handleInter={handleInter} />
                :
                  <InputCount />
            }
        </div>
    )
}
export default Intercambiabilidad
