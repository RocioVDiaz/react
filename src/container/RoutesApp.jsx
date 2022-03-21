import { useState } from 'react';
import Titulo from '../components/titulo/Titulo';
import NavBar from '../components/NavBar/NavBar';
import Input from '../components/Input/Input';



function RoutesApp() {

  const [count, setCount] = useState(0)

  const style = { backgroundColor: 'blue'}

  let titulo = 'Hola, soy saludo'


  return (
    <>

        <NavBar/>
        <Titulo titulo= {titulo} subtitulo='Soy subtitulo' />
        <Input placeholder='Ingrese el nombre'/>
        
      </>
  )
}

export default RoutesApp