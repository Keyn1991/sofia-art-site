import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from '../types/types';
import styles from './Gallery.module.css';
interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const navigate = useNavigate();

  const handleDetailsClick = (id: number) => {
    const image = images.find((image) => image.id === id);
    if (image) {
      navigate(`/image/${id}`, { state: { image } });
    }
  };

  return (
    <Container fluid style={{ maxWidth: '75%', margin: '0 auto' }}>
      <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <Col xs={12} md={4} lg={3} key={image.id}>
            <Card className="mb-3 border-primary">
              <Card.Img
                variant="top"
                src={image.url}
                className={`hover-zoom  ${styles.card}`}
              />
              <Card.Body>
                <Card.Title>{image.title}</Card.Title>
                {/*<Card.Text>{image.description}</Card.Text>*/}
                <Button
                  variant="success"
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
