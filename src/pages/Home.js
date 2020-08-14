import React from 'react';
import TableTennis from '../images/TableTennis.jpg';
import DataBaseImage from '../images/Database.jpg';
import CloudImage from '../images/Cloud.jpg';
import CodeImage from '../images/Code.jpg';
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
                        <h3 className="text-white">Welcome to my porfolio!</h3>
                        <p className="text-white">This is your one stop shop to learn more about me and my experiences!</p>
                    </div>
                </div>
                {/* Skills */}
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 text-center pt-4 pb-3">
                                <h3 className="font-weight-bold">My Skillset</h3>
                                <p className="font-italic">I am an aspiring Computer Scientist. Java and Python are my core, and I am also interested in Web Development!</p>
                            </div>
                        </div>
                        <div className="row">
                            <CardDeck>
                                <Card className="ml-5 mr-5 mb-5 border-0">
                                    <Card.Img variant="top" src={ CodeImage } />
                                    <Card.Body>
                                    <Card.Title>Languages/Frameworks</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="ml-5 mr-5 mb-5 border-0">
                                    <Card.Img variant="top" src={ DataBaseImage } />
                                    <Card.Body>
                                    <Card.Title>DB</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card className="ml-5 mr-5 mb-5 border-0">
                                    <Card.Img variant="top" src={ CloudImage } />
                                    <Card.Body>
                                    <Card.Title>Cloud Deployment</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                        </div>
                    </div>
                </div>
                {/* Introduction */}
                <div className="row row-section align-items-center bg-dark">
                    <div className="col-12 text-center">
                        <h3 className="text-white">I build this website from scratch!</h3>
                        <p className="text-white">With help from React and Bootstrap :)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
