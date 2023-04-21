import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import styles from './Gallery.module.css';
import React from 'react';

export interface Image {
  id: number;
  url: string;
  title: string;
  description: string;
}

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const handleDetailsClick = (id: number) => {
    // Navigate to a new page with details about the image with the given ID
  };

  return (
    <Container fluid>
      <Row className={styles.row} style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <Col xs={12} md={4} lg={3} key={image.id}>
            <Card className={`mb-3 border-primary ${styles.card}`}>
              <Card.Img variant="top" src={image.url} className="hover-zoom" />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>{image.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleDetailsClick(image.id)}
                >
                  Детальніше
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export { Gallery };
