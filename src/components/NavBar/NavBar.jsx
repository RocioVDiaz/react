import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import logo from './escudo.jpg'
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"> <img
          alt=""
          src={logo}
          width="40"
          height="40"
        
          className="d-inline-block align-top"
        />{' '}Paladar Negro Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      
      <NavDropdown title="Indumentaria" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Lanzamiento</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Retro</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Conjuntos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Accesorios</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Iniciar Sesión</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        <CartWidget/> 
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar