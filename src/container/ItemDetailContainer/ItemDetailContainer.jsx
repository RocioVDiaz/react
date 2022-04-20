import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { getFetch } from "../../components/helpers/getFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"



function ItemDetailContainer() {

const [producto, setProducto] = useState({})
const [loading, setLoading] = useState(true)
const {detalleId} = useParams()

useEffect(() => {
 setTimeout(()=>{
  getFetchApi()
 }, 2000)
}, [])

const getFetchApi = async () => {
  try {
    const query = await fetch('/assets/DATA.json')
    const queryParse = await query.json()
    const indumentaria = queryParse.detalle.find(item =>  item.id === Number(detalleId)   )
    setProducto(indumentaria)
   
  } catch (error) {
  } 
  setLoading(false)
}


  return (
    <>
     {(loading)? <Spinner animation="border" className="mt-5" variant="danger" />:

    <ItemDetail camiseta={producto}/>}
    </>
  )
}

export default ItemDetailContainer