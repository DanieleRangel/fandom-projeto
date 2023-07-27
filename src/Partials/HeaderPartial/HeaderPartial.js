import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const HeaderPartial = () => {
  return (
    <Navbar bg="success" expand="lg">
      <Container className="d-flex flex-row">
        <Navbar.Brand className="text-white" href="#home">FanDom Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-row-reverse">
          <Nav >
            <Link className="nav-link text-white" to="/">Home</Link>
            <Link className="nav-link  text-white" to="cart">
              <FontAwesomeIcon icon={faShoppingCart} /> Meu Carrinho
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}