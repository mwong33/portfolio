import React from 'react';
import TableTennis from '../images/TableTennis.jpg';
import Footer from '../components/Footer.js';

export default function Home() {
    return (
        <div id="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <img alt="Space" src={TableTennis} className="mh-100 mw-100"/>
                        <h1>Hello There</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
