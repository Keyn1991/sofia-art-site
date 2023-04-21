import { Container, Row, Col, Card } from 'react-bootstrap';
import { Image } from '../Gallery';
import React from 'react'; // Import the Image interface from the Gallery component

interface ImageDetailsProps {
  image: Image;
}

const ProductDetails: React.FC<ImageDetailsProps> = ({ image }) => {
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
      </Row>
    </Container>
  );
};

export { ProductDetails };
