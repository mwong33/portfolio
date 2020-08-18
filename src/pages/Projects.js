import React from 'react';
import { motion } from 'framer-motion';
import { CardDeck } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard.js';
import TheProjects from '../data/TheProjects.js';

import pageTransition from '../data/PageTransition.js';

export default function Projects() {
    return (
        <motion.div id="projects" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="continer">
                <div className="row mt-5 mb-3 text-center">
                    <div className="col-12">
                        <h1>My Projects</h1>
                        <p className="font-italic">More to come!</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto mb-3">
                        <ProjectCard project={ TheProjects[0] }/>
                    </div>
                    <div className="col-auto mb-3">
                        <ProjectCard project={ TheProjects[1] }/>
                    </div>
                    <div className="col-auto mb-3">
                        <ProjectCard project={ TheProjects[2] }/>
                    </div>
                    <div className="col-auto mb-3">
                        <ProjectCard project={ TheProjects[3] }/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
