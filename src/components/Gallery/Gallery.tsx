import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GalleryProps } from '../types';
import styles from './Gallery.module.css';
const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageSize, setPageSize] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = params.get('page');
    if (pageParam) {
      setCurrentPage(parseInt(pageParam));
    }
  }, [location]);

  const handleDetailsClick = (id: number) => {
    const image = images.find((image) => image.id === id);
    if (image) {
      navigate(`/image/${id}`, { state: { image } });
    }
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setPageSize(8);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setPageSize(8);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const displayedImages = images.slice(startIndex, startIndex + pageSize);

  const totalPages = Math.ceil(images.length / pageSize);

  return (
    <div className={styles.main}>
      <Container
        fluid
        style={{ maxWidth: '75%', margin: '0 auto', paddingBottom: '17rem' }}
      >
        <Row style={{ display: 'flex', flexWrap: 'wrap' }}>
          {displayedImages.map((image) => (
            <Col xs={12} md={4} lg={3} key={image.id}>
              <Card className="mb-3 border-primary">
                <Card.Img
                  variant="top"
                  src={image.url}
                  className={`hover-zoom  ${styles.card}`}
                />
                <Card.Body>
                  <Card.Title>{image.title}</Card.Title>
                  <Button
                    variant="success"
                    onClick={() => handleDetailsClick(image.id)}
                  >
                    More details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: 'center' }}>
          {currentPage > 1 && (
            <Button variant="success" onClick={handlePrevClick}>
              {'< Previous'}
            </Button>
          )}
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          {displayedImages.length === pageSize && (
            <Button variant="success" onClick={handleNextClick}>
              {'Next >'}
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export { Gallery };
