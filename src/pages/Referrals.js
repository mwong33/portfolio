import React from 'react';
import { motion } from 'framer-motion';

import pageTransition from '../data/PageTransition.js';

export default function Referrals() {
    return (
        <motion.div id="referrals" initial="out" animate="in" exit="out" variants={pageTransition}>
            <p>Referrals</p>
        </motion.div>
    )
}
