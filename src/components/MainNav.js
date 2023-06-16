import { Navbar, Container, Nav } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNav() {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Container>
          <Navbar.Brand>Vinh Nhan</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link>Movies</Nav.Link>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link>About</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </>
  );
}
