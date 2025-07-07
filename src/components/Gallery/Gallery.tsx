import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Gallery.module.css';

interface ImageData {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface GalleryProps {
  images: ImageData[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pageSize] = useState<number>(8);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageParam = params.get('page');
    const page = pageParam ? parseInt(pageParam) : 1;
    setCurrentPage(page);
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const totalPages = Math.ceil(images.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const displayedImages = images.slice(startIndex, startIndex + pageSize);

  const handleDetailsClick = (id: number) => {
    const image = images.find((image) => image.id === id);
    if (image) {
      navigate(`/image/${id}`, { state: { image } });
    }
  };

  const handlePageClick = (page: number) => {
    navigate(`?page=${page}`);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      navigate(`?page=${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      navigate(`?page=${currentPage + 1}`);
    }
  };

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
                  className={`hover-zoom ${styles.card}`}
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

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Button
            variant="success"
            onClick={handlePrevClick}
            disabled={currentPage === 1}
            className="me-2"
          >
            {'< Previous'}
          </Button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <Button
                key={pageNumber}
                variant={
                  pageNumber === currentPage ? 'primary' : 'outline-primary'
                }
                onClick={() => handlePageClick(pageNumber)}
                className="me-1"
              >
                {pageNumber}
              </Button>
            );
          })}

          <Button
            variant="success"
            onClick={handleNextClick}
            disabled={currentPage === totalPages}
            className="ms-2"
          >
            {'Next >'}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export { Gallery };
