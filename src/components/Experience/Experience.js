import React from 'react';
import ExperienceCard from './ExperienceCard.js';
import Experiences from '../../data/experience.json';

export default function Experience() {
    return (
      <div className="container">
          <div className="row mt-5 mb-3 text-center text-white">
              <div className="col-12">
                  <h1>My Experience</h1>
                  <p className="font-italic">I had the privilege to work with some awesome people!</p>
              </div>
          </div>
          {
              Experiences.map((experience, index) => {
                  return <ExperienceCard key={ index } experience={ experience }/>
              })
          }
      </div>
    )
}