import React from 'react';
import './App.css';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <div className="page-container background">
        <div className="content-wrap">
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
