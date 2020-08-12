import React from 'react'
import GitHub_Logo from '../images/GitHub-Mark-32px.png'
import LinkedIn_Logo from '../images/LinkedIn-Logo.png'

export default function Footer() {
    return (
        <div className="footer">
            <hr></hr>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <p>© MATTHEW WONG 2020</p>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="https://github.com/mwong33"><img alt="GitHub" src={GitHub_Logo} classNmae="icon"/></a>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <a href="https://www.linkedin.com/in/matthew-james-wong-7007b4a6/"><img alt="LinkedIn" src={LinkedIn_Logo} className="icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
