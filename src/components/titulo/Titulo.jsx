import './Titulo.css'

function Titulo({titulo, subtitulo}) {

  return (
    <div className= 'titulo'>
      <h1>{titulo}</h1> 
      <h2>{subtitulo}</h2>
      </div>
  )
}

export default Titulo