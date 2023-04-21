import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {images} from "./pages/Products/Product";

import {Footer} from "./components/Footer";
import {Gallery} from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <Header/>
        <Gallery images={images} />
        <Footer/>
    </div>
  );
}

export {App};
