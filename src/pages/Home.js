import React from 'react';
import { motion } from 'framer-motion';
import SkillBarGroup from '../components/SkillBarGroup.js';
import TableTennis from '../images/TableTennis.jpg';
import ReactLogo from '../images/React.png';
import BootstrapLogo from '../images/Bootstrap.png';
import "./Home.css";
import { Button } from 'react-bootstrap';

import pageTransition from '../data/PageTransition.js';

export default function Home() {

    const languages = [
        {skill: "HTML", score: 90},
        {skill: "CSS", score: 90},
        {skill: "JavaScript", score: 70},
        {skill: "Java", score: 95},
        {skill: "Python", score: 95},
        {skill: "C++", score: 70}
    ];
    
    const frameworks = [
        {skill: "Angular", score: 60},
        {skill: "Bootstrap", score: 85},
        {skill: "React", score: 70},
        {skill: "Express", score: 80},
        {skill: "Flask", score: 80}
    ]

    const dbCloud = [
        {skill: "MySQL", score: 80},
        {skill: "MongoDB", score: 70},
        {skill: "AWS", score: 60},
        {skill: "GCP", score: 70}

    ]
    
    return (
        <motion.div id="home" initial="out" animate="in" exit="out" variants={pageTransition}>
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
                        <div className="row align-items-around mb-5">
                            <div className="col-md-4">
                                <SkillBarGroup skills={ languages }/>
                            </div>
                            <div className="col-md-4">
                                <SkillBarGroup skills={ frameworks }/>
                            </div>
                            <div className="col-md-4">
                                <SkillBarGroup skills={ dbCloud }/>
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
        </motion.div>
    )
}
