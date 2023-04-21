import { Link, NavLink } from "react-router-dom"
import logo from '../img/logo.png'

// react-bootstrap
import { Container, Nav, Navbar, Button, Image } from "react-bootstrap"

export default function Header() {
  return (
    <Navbar bg="light" variant="light">
    <Container fluid>
      <Navbar.Brand href="#home">
        <Image className="logo rounded border border-dark" src={logo} />
      </Navbar.Brand>
      <Nav className="me-auto gap-3">
        <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
        <Nav.Link className="nav-link" href="#features">Profile</Nav.Link>
        <Button className="btn btn-danger">login/logout</Button>
      </Nav>
    </Container>
  </Navbar>
  )
}