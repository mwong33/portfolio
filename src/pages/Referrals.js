import React from 'react';
import { motion } from 'framer-motion';
import ReferralsData from '../data/ReferralsData.js';
import ReferralCard from '../components/ReferralCard.js';
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
                {
                    ReferralsData.map((Referral, index) => {
                        return <ReferralCard key={ index } referral={ Referral }/>
                    })
                }
            </div>
        </motion.div>
    )
}
