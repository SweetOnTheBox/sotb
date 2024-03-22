import FeatherIcon from "feather-icons-react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../index.css";

function NavigationBar() {
  const message = "Hi SOTB! Want to order the cake";
  const phone = "6285817165337";
  const directToWatsapp = () => {
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL).focus();
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="https://www.instagram.com/sweetonthebox/">
          <img src="assets/3.png" alt="sotb" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-md-flex justify-content-end w-100 p-1 fs-5 mx-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#price">Price</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link onClick={directToWatsapp}>Order Now</Nav.Link>
            <NavDropdown title="Links" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/sweetonthebox/">
                <FeatherIcon icon="instagram" fill="#cd486b" />
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Tiktok</NavDropdown.Item>
              <NavDropdown.Item href="https://wa.me/6285817165337">
                <FeatherIcon icon="phone" fill="blue" />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Forms</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
