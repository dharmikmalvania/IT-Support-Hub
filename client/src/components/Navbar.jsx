import { Navbar, Container, Nav } from "react-bootstrap";

const TopNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>IT Support Hub</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link>Profile</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
