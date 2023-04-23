import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.css';
const getAccessLevel = (): string => {
  // your code for getting the current access level of the user
  return 'admin'; // for example
};

const Header: React.FC = () => {
  const accessLevel = getAccessLevel();

  return (
    <header className={styles.header}>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3 ms-2">
        <Navbar.Brand href="#" className="font-weight-bold text-uppercase">
          Sofia-Arts
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-dark me-3">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              About
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="me-3">
            {accessLevel === 'admin' && (
              <Nav.Link href="#" className="text-dark me-3">
                Admin
              </Nav.Link>
            )}
            <Button variant="success" className="rounded-pill px-4">
              Log in
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export { Header };
