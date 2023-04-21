import React from 'react';
import './App.css';

import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';

import { ProductDetailsPage } from './pages/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/image/:id'} element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
}

export { App };
