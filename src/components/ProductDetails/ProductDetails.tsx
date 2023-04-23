import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductDetailsProps } from '../types';
import styles from './ProductDetails.module.css';
import ReactImageMagnify from 'react-image-magnify';

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
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: image.url,
                },
                largeImage: {
                  src: image.url,
                  width: 1200,
                  height: 1800,
                },
                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' },
                enlargedImageStyle: { zIndex: 9999 },

              }}
            />
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
    </div>
  );
};

export { ProductDetails };
