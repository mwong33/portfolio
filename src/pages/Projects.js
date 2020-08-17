import React from 'react';
import { motion } from 'framer-motion';

import pageTransition from '../data/PageTransition.js';

export default function Projects() {
    return (
        <motion.div id="projects" initial="out" animate="in" exit="out" variants={pageTransition}>
            <p>Projects</p>
        </motion.div>
    )
}
