import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import ReactLogo from '../images/React.png';
import BootstrapLogo from '../images/Bootstrap.png';
import "./Home.css";
import { Button } from 'react-bootstrap';
import Resume from '../pdf/Matthew_Wong_Resume_Q3_2021.pdf';
import pageTransition from '../data/PageTransition.js';
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";

import Experience from '../components/Experience/Experience.js';
import Projects from '../components/Projects/Projects.js';
import Referrals from '../components/Referrals/Referrals.js';

export default function Home() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
        <motion.div id="home" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="container-fluid">
                {/* Background Image */}
                <div className="row row-section align-items-center text-white">
                    <div className="col-12 text-center">
                        <h1>
                            <Typewriter
                                options={{
                                    strings: ["Hello, I'm Matthew", "Welcome to my Portfolio!"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className="paragraph-responsive-text font-italic font-weight-bold">
                            M.S. Student at USC
                        </p>
                        <a href={ Resume } className="link-unstyled"><Button variant="light rounded-0">View Resume</Button></a>
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
                    <div className="col-12 text-center" data-aos="flip-down">
                        <h2>Made with <img alt="React" src={ ReactLogo } className="medium-icon"/> + <img alt="Bootstrap" src= { BootstrapLogo } className="medium-icon"/></h2>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
