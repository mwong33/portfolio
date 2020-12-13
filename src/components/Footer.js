import React, { Component } from 'react';
import GitHub_Logo from '../images/GitHub_Logo_White.png';
import LinkedIn_Logo from '../images/LinkedIn-Logo.png';
import "./Footer.css";

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container-fluid">
                    <div className="row justify-content-between text-white">
                        <div className="col-8">
                            <p>© MATTHEW WONG 2020</p>
                        </div>
                        <div className="col-4">
                            <a href="https://github.com/mwong33"><img alt="GitHub" src={GitHub_Logo} className="gitHub float-right ml-2"/></a>
                            <a href="https://www.linkedin.com/in/matthew-james-wong/"><img alt="LinkedIn" src={LinkedIn_Logo} className="linkedIn float-right ml-2 mr-2"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;