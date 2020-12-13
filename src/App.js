import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <div className="page-container background">
        <div className="content-wrap">
          <NavBar />
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
