import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-dark text-light py-3 mr-auto`}>
      <Container>
        <Row className="justify-content-center mt-auto">
          <Col md={4}>
            <h5>Kontakt</h5>
            <Nav className="flex-column">
              <Nav.Link>Adres: вул. Sulejówek Drobiarska 59</Nav.Link>
              <Nav.Link>Telefon: +48 507 340 438</Nav.Link>
              <Nav.Link>Email: info@mysite.com</Nav.Link>
            </Nav>
          </Col>
          <Col md={4}>
            <h5>Link</h5>
            <Nav className="flex-column">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Kontakt</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export { Footer };
