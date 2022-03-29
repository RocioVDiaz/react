import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { getFetch } from "../../components/helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"



function ItemDetailContainer() {

const [producto, setProducto] = useState({})
const [loading, setLoading] = useState(true)

useEffect(() => {
 setTimeout(()=>{
  getFetchApi()
 }, 2000)
}, [])

const getFetchApi = async () => {
  try {
    const query = await fetch('/assets/DATA.json')
    const queryParse = await query.json()
    setProducto(queryParse.detalle)
    console.log(producto)
  } catch (error) {
    console.log(error)
  } 
  setLoading(false)
}


  return (
    <>
     {(loading)? <Spinner animation="border" variant="primary" />:

    <ItemDetail camiseta={producto}/>}
    </>
  )
}

export default ItemDetailContainer