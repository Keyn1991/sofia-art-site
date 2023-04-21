import React from 'react';
import {Container, Col, Row, Nav, Form, Button } from "react-bootstrap";



const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3 mr-auto">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>Kontakt</h5>
                        <Nav className="flex-column">
                            <Nav.Link>Adres: вул. Sulejówek Drobiarska 59</Nav.Link>
                            <Nav.Link>Telefon: +48 507 340 438</Nav.Link>
                            <Nav.Link>Email: info@mysite.com</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4}>
                        <h5>Посилання</h5>
                        <Nav className="flex-column">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Kontakt</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={4}>
                        <h5>Підписатися на розсилку</h5>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Введіть email" />
                            </Form.Group>
                            <Button  variant="success" type="submit" className="rounded-pill px-4 m-2" >
                                Підписатися
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>

    );
};

export {Footer};