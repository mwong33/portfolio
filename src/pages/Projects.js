import React from 'react';
import { motion } from 'framer-motion';

import pageTransition from '../data/PageTransition.js';

export default function Projects() {
    return (
        <motion.div id="projects" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="continer mt-5 mb-5">
                <div className="row text-center">
                    <div className="col-12">
                        <h1>My Projects</h1>
                        <p className="font-italic">More to come!</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
