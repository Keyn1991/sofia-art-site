import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Image {
  id: number;
  title: string;
  description: string;
  url: string;
}

interface ProductDetailsProps {
  image: Image;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ image }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate('/');
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="mb-3">
          <Card>
            <Card.Img variant="top" src={image.url} />
          </Card>
        </Col>
        <Col md={6}>
          <h2>{image.title}</h2>
          <p>{image.description}</p>
        </Col>
        <Button variant="success" onClick={() => handleDetailsClick()}>
          Back
        </Button>
      </Row>
    </Container>
  );
};

export { ProductDetails };
