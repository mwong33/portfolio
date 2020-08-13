import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Experience from './pages/Experience.js';
import Projects from './pages/Projects.js';
import Referrals from './pages/Referrals.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <NavBar />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/experience" component={Experience}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/referrals" component={Referrals}></Route>
              </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
