import React from 'react';
import Header from '../../components/Header/Header';
import { ProductCard } from '../../components/ProductCard';
import { Footer } from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <ProductCard />
      <Footer />
    </div>
  );
};

export { Home };
