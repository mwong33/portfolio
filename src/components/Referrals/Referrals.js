import React from 'react';
import ReferralsData from '../../data/ReferralsData.js';
import ReferralCard from './ReferralCard.js';

export default function Referrals() {
    return (
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
    )
}
