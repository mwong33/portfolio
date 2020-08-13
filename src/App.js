import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Referrals from './components/Referrals.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/referrals" component={Referrals}></Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
