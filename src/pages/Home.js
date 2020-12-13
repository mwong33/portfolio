import React from 'react';
import { motion } from 'framer-motion';
import ReactLogo from '../images/React.png';
import BootstrapLogo from '../images/Bootstrap.png';
import "./Home.css";
import { Button } from 'react-bootstrap';
import Resume from '../pdf/Matthew_Wong_Resume_Q4_2020.pdf';
import pageTransition from '../data/PageTransition.js';

import Experience from '../components/Experience/Experience.js';
import Projects from '../components/Projects/Projects.js';
import Referrals from '../components/Referrals/Referrals.js';

export default function Home() {
    return (
        <motion.div id="home" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="container-fluid">
                {/* Background Image */}
                <div className="row row-section align-items-center text-white">
                    <div className="col-12 text-center">
                        <h1>Hello, I'm Matthew</h1>
                        <p className="paragraph-responsive-text font-italic font-weight-bold">M.S. CS Student at USC</p>
                        <a href={ Resume } className="link-unstyled"><Button variant="light rounded-0">View Resume</Button></a>
                    </div>
                </div>
                {/* Introduction */}
                <div className="row row-section align-items-center text-white">
                    <div className="col-12 text-center">
                        <h2>Welcome to my porfolio!</h2>
                        <p>This is your one stop shop to learn more about me and my experiences!</p>
                    </div>
                </div>
                {/* Experience */}
                <Experience/>
                {/* Projects */}
                <Projects/>
                {/* Referrals */}
                <Referrals/>
                {/* Made With */}
                <div className="row row-section align-items-center text-white">
                    <div className="col-12 text-center">
                        <h2>Made with <img alt="React" src={ ReactLogo } className="medium-icon"/> + <img alt="Bootstrap" src= { BootstrapLogo } className="medium-icon"/></h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
