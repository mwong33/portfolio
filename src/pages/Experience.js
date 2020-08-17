import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard.js';
import Experiences from '../data/experience.json';

import pageTransition from '../data/PageTransition.js';

export default function Experience() {

    return (
        <motion.div id = "experience" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="container">
                {
                    Experiences.map((experience, index) => {
                        return <ExperienceCard key={ index } experience={ experience }/>
                    })
                }
            </div>
        </motion.div>
    )
}
