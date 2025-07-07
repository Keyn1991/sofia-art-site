import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductDetailsProps } from '../types';
import styles from './ProductDetails.module.css';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductDetails: React.FC<ProductDetailsProps> = ({ image }) => {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.main}>
      <Container
        fluid
        style={{ maxWidth: '75%', margin: '0 auto', paddingBottom: '17rem' }}
      >
        <Row className="flex-grow-1">
          <Col md={6} className="mb-3">
            <Zoom>
              <img
                src={image.url}
                alt={image.title}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </Zoom>
          </Col>
          <Col md={6}>
            <h2>{image.title}</h2>
            <p>{image.description}</p>
          </Col>
          <Button variant="success" onClick={handleDetailsClick}>
            Back
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export { ProductDetails };
