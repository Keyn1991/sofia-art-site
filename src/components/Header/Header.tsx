import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

const getAccessLevel = (): string => {
  // your code for getting the current access level of the user
  return 'admin'; // for example
};

const Header: React.FC = () => {
  const accessLevel = getAccessLevel();

  return (
    <header>
      <Navbar bg="light" expand="lg" className="shadow-sm py-3 ms-2">
        <Navbar.Brand href="#" className="font-weight-bold text-uppercase">
          Мій сайт
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="text-dark me-3">
              Головна
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Про нас
            </Nav.Link>
            <Nav.Link href="#" className="text-dark me-3">
              Контакти
            </Nav.Link>
          </Nav>
          <Nav className="me-3">
            {accessLevel === 'admin' && (
              <Nav.Link href="#" className="text-dark me-3">
                Адмін панель
              </Nav.Link>
            )}
            <Button variant="success" className="rounded-pill px-4">
              Увійти
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
