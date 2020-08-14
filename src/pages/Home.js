import React from 'react';
import TableTennis from '../images/TableTennis.jpg';
import "./Home.css";
import { Button } from 'react-bootstrap';

export default function Home() {
    return (
        <div id="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center p-0">
                        <img alt="Space" src={TableTennis} className="mh-100 mw-100"/>
                        <div className="centered border-box">
                            <h1 className="text-white title-responsive-text">Hello, I'm Matthew</h1>
                            <p className="text-white paragraph-responsive-text font-italic">M.S. CS Student at USC</p>
                            <Button variant="light rounded-0">Download Resume</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
