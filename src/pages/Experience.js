import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard.js';
import Experiences from '../data/experience.json';

import pageTransition from '../data/PageTransition.js';

export default function Experience() {

    return (
        <motion.div id = "experience" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="container">
                <div className="row mt-5 mb-3 text-center">
                    <div className="col-12">
                        <h1>My Experience</h1>
                        <p className="font-italic">I had the privilege to work with some awesome people!</p>
                    </div>
                </div>
                {
                    Experiences.map((experience, index) => {
                        return <ExperienceCard key={ index } experience={ experience }/>
                    })
                }
            </div>
        </motion.div>
    )
}
