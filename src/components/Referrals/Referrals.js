import React, {useEffect} from 'react';
import ReferralsData from '../../data/ReferralsData.js';
import ReferralCard from './ReferralCard.js';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Referrals() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
      <div className="container row-section" data-aos="fade-up">
          <div className="row mt-5 mb-3 text-center text-white">
              <div className="col-12">
                  <h1>My Referrals</h1>
                  <p className="font-italic">What people think of me!</p>
              </div>
          </div>
          <div className="row mt-3 mb-3">
            {
                ReferralsData.map((Referral, index) => {
                    return <ReferralCard key={ index } referral={ Referral }/>
                })
            }
          </div>
      </div>
    )
}
