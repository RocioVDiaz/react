import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Titulo from '../components/titulo/Titulo';
import NavBar from '../components/NavBar/NavBar';
import Input from '../components/Input/Input';
import ItemCounts from '../components/ItemCounts/ItemCounts';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import CartContainer from './CartContainer/CartContainer';
import CartContextProvider, { CartContext } from '../context/cartContext';



function RoutesApp() {

  const [count, setCount] = useState(0)

  const style = { backgroundColor: 'blue'}

  let titulo = 'Hola, soy saludo'

  function onAdd (count) {
    alert (`Se agregaron ${count} productos al carrito`)
  }


  return (
    <BrowserRouter>
    <CartContextProvider>
    <NavBar/>
      <Routes>
        <Route path='/'
               element={ <>
            
               <ItemListContainer/></>}

                 />
                 <Route path='/indumentaria/:indumentariaId'
               element={ <>
                  <ItemListContainer/></>}

                 />
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}/>
          <Route path='/carrito' element={<CartContainer/>}/>
      
        
     
       
        
      </Routes>
      </CartContextProvider>           
     </BrowserRouter>
  )
}

export default RoutesApp