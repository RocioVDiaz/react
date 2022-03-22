import { useState } from 'react';
import Titulo from '../components/titulo/Titulo';
import NavBar from '../components/NavBar/NavBar';
import Input from '../components/Input/Input';
import ItemCounts from '../components/ItemCounts/ItemCounts';



function RoutesApp() {

  const [count, setCount] = useState(0)

  const style = { backgroundColor: 'blue'}

  let titulo = 'Hola, soy saludo'

  function onAdd (count) {
    alert (`Se agregaron ${count} productos al carrito`)
  }


  return (
    <>

        <NavBar/>
        <Titulo titulo= {titulo} subtitulo='Soy subtitulo' />
        <Input placeholder='Ingrese el nombre'/>
        <ItemCounts onAdd={onAdd} stock={5} initial={1}/>
        
      </>
  )
}

export default RoutesApp