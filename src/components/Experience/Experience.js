import React, {useEffect} from 'react';
import ExperienceCard from './ExperienceCard.js';
import Experiences from '../../data/experience.json';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
      <div className="container row-section" data-aos="fade-up">
          <div className="row mt-5 mb-3 text-center text-white">
              <div className="col-12">
                  <h1>My Experience</h1>
                  <p className="font-italic">I had the privilege to work with some awesome people!</p>
              </div>
          </div>
          <div className="row mt-3 mb-3">
            {
                Experiences.map((experience, index) => {
                    return <ExperienceCard key={ index } experience={ experience }/>
                })
            }
          </div>
      </div>
    )
}