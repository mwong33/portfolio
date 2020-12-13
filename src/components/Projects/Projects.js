import React, {useEffect} from 'react';
import ProjectCard from './ProjectCard.js';
import TheProjects from '../../data/TheProjects.js';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
      <div className="continer row-section" data-aos="fade-up">
          <div className="row mt-5 mb-3 text-center text-white">
              <div className="col-12">
                  <h1>My Projects</h1>
                  <p className="font-italic">More to come!</p>
              </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-auto mb-6 mt-3 mb-3" data-aos="fade-right">
                  <ProjectCard project={ TheProjects[0] }/>
              </div>
              <div className="col-auto mb-6 mt-3 mb-3" data-aos="fade-left">
                  <ProjectCard project={ TheProjects[1] }/>
              </div>
          </div>
      </div>
    )
}