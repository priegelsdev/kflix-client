import { LinkContainer } from 'react-router-bootstrap'
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
      <Nav className="navbar gap-3">
        <LinkContainer to="/">
          <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/profile">
          <Nav.Link className="nav-link" href="#features">Profile</Nav.Link>
        </LinkContainer>
        <Button className="btn btn-danger">login/logout</Button>
      </Nav>
    </Container>
  </Navbar>
  )
}