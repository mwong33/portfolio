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
                            <h1 className="text-white">Hello, I'm Matthew</h1>
                            <h3 className="text-white ">M.S. CS Student at USC</h3>
                            <Button variant="light">Download Resume</Button>{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
