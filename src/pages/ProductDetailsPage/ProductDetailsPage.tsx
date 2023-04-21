import React from 'react';
import { ProductDetails } from '../../components/ProductDetails';
import { images } from '../../components/ProductCard';
import { useParams } from 'react-router-dom';
import { Image } from '../../components/types';
const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const image: Image | undefined = images.find((img) => img.id === Number(id));

  if (!image) {
    return <div>Image not found</div>;
  }
  return (
    <div>
      <ProductDetails image={image} />
    </div>
  );
};

export { ProductDetailsPage };
