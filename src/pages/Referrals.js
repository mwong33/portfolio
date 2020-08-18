import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-bootstrap';

import pageTransition from '../data/PageTransition.js';

export default function Referrals() {
    return (
        <motion.div id="referrals" initial="out" animate="in" exit="out" variants={pageTransition}>
            <div className="container">
                <div className="row mt-5 mb-3 text-center">
                    <div className="col-12">
                        <h1>My Referrals</h1>
                        <p className="font-italic">What people think of me!</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
