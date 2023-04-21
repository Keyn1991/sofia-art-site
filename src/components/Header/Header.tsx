import React from 'react';
import {Button, Nav, Navbar} from 'react-bootstrap';


const getAccessLevel = (): string => {
    // your code for getting the current access level of the user
    return 'admin'; // for example
};

const Header: React.FC = () => {
    const accessLevel = getAccessLevel();

    return (
        <header>
            <Navbar bg="light" expand="lg" className="shadow-sm py-3">
                <Navbar.Brand href="#home" className="font-weight-bold text-uppercase">Мій сайт</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#" className="text-dark mr-3">Головна</Nav.Link>
                        <Nav.Link href="#" className="text-dark mr-3">Про нас</Nav.Link>
                        <Nav.Link href="#" className="text-dark mr-3">Контакти</Nav.Link>
                        {accessLevel === 'admin' && (
                            <Nav.Link href="#" className="text-dark mr-3">Адмін панель</Nav.Link>
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
