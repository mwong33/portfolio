import React from 'react';
import { motion } from 'framer-motion';

import pageTransition from '../data/PageTransition.js';

export default function Referrals() {
    return (
        <motion.div id="referrals" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="container">
                <div className="row mt-5 mb-5 text-center">
                    <div className="col-12">
                        <h1>My Referrals</h1>
                        <p className="font-italic">I had the privaledge to work and learn from some awesome people!</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
