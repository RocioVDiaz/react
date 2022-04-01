import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './escudo.jpg'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavLink to='/'> <img
          alt=""
          src={logo}
          width="40"
          height="40"
        
          className="d-inline-block align-top"
        />{' '}Paladar Negro Store</NavLink>
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
      <NavLink to="/contacto">Contacto</NavLink>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Iniciar Sesión</Nav.Link>
      <NavLink to='/carrito'>
        <CartWidget/> 
      </NavLink>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar




