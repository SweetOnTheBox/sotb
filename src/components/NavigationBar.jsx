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
    <Navbar collapseOnSelect expand="lg" bg="transparent" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="https://www.instagram.com/sweetonthebox/">
          <img src="assets/3.png" alt="sotb" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-md-flex justify-content-end w-100 p-1 fs-5 mx-auto">
            <NavDropdown title="Links" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/sweetonthebox/">
                Instagram
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.tiktok.com/@sweetonthebox">
                Tiktok
              </NavDropdown.Item>
              <NavDropdown.Item onClick={directToWatsapp}>
                Whatsapp
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://forms.gle/6bv6CRWfgnhzouph7">
                Order Forms
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#price">Price</Nav.Link>
            <Nav.Link onClick={directToWatsapp}>Contact</Nav.Link>
            <Nav.Link onClick={directToWatsapp}>Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
