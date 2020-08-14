import React from 'react';
import TableTennis from '../images/TableTennis.jpg';
import ReactLogo from '../images/React.png';
import BootstrapLogo from '../images/Bootstrap.png';
import "./Home.css";
import { Button, CardDeck, Card } from 'react-bootstrap';

export default function Home() {
    return (
        <div id="home">
            <div className="container-fluid">
                {/* Background Image */}
                <div className="row">
                    <div className="col-12 text-center p-0">
                        <img alt="Space" src={TableTennis} className="mh-100 mw-100"/>
                        <div className="centered border-box">
                            <h1 className="text-white">Hello, I'm Matthew</h1>
                            <p className="text-white paragraph-responsive-text font-italic font-weight-bold">M.S. CS Student at USC</p>
                            <Button variant="light rounded-0">Download Resume</Button>{' '}
                        </div>
                    </div>
                </div>
                {/* Introduction */}
                <div className="row row-section align-items-center bg-dark">
                    <div className="col-12 text-center">
                        <h2 className="text-white">Welcome to my porfolio!</h2>
                        <p className="text-white">This is your one stop shop to learn more about me and my experiences!</p>
                    </div>
                </div>
                {/* Skills */}
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 text-center pt-4 pb-3">
                                <h2 className="font-weight-bold">My Skillset</h2>
                                <p className="font-italic">I am an aspiring Computer Scientist. Java and Python are my core, and I am also interested in Web Development!</p>
                            </div>
                        </div>
                        <div className="row align-items-around">
                            <div className="col-md-6">
                                
                            </div>
                            <div className="col-md-6">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                
                            </div>
                            <div className="col-md-6">
                           
                            </div>
                        </div>
                    </div>
                </div>
                {/* Introduction */}
                <div className="row row-section align-items-center bg-dark">
                    <div className="col-12 text-center">
                        <h2 className="text-white">Made with <img alt="React" src={ ReactLogo } className="medium-icon"/> + <img alt="Bootstrap" src= { BootstrapLogo } className="medium-icon"/></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
