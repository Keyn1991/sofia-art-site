import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

const ShoppingCart = () => {
  return (
    <div>
      <Col md={4}>
        <h5>Підписатися на розсилку</h5>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Введіть email" />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="rounded-pill px-4 m-2"
          >
            Підписатися
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export { ShoppingCart };
