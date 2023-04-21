import React from 'react';
import './App.css';

import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';

import { ProductDetailsPage } from './pages/ProductDetailsPage';
import Header from './components/Header/Header';
import { Footer } from './components/Footer';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/image/:id'} element={<ProductDetailsPage />} />
    </Routes>
    <Footer />
  </div>
);

export { App };
