import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './escudo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
import './NavBar.css'



function NavBar() {
  return (<>
  {/*   <div class="jumbotron">
    <div class="container text-center">
      <h1>Paladar Negro Store</h1>
      <p class="fw-bold">Indumentaria Exclusiva del Club Atlético Independiente</p>
    </div>
  </div> */}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavLink to='/' className="text-white nav-link "> <img
          alt=""
          src={logo}
          width="40"
          height="40"        
          className="d-inline-block align-top"
        />{' '}<span className=" nav-link d-inline-block text-white " >Paladar Negro Store</span></NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
      
      <NavDropdown title="Indumentaria" menuVariant="dark" id="collasible-nav-dropdown">
        <NavLink to="/indumentaria/camiseta"  className="dropdown-item">Camisetas</NavLink>
        <NavLink to="/indumentaria/shorts" className="dropdown-item">Shorts</NavLink>
        <NavLink to="/indumentaria/campera" className="dropdown-item">Camperas</NavLink>
        <NavDropdown.Divider />
        <NavLink to="/indumentaria/accesorios" className="dropdown-item">Accesorios</NavLink>
      </NavDropdown>
      <NavLink  className="nav-link" to="/contacto">Contacto</NavLink>
    </Nav>
    <Nav>
      <Nav.Link  className="nav-link" href="#deets">Iniciar Sesión</Nav.Link>
      <NavLink to='/carrito'>
        <CartWidget/> 
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
  )
}

export default NavBar




