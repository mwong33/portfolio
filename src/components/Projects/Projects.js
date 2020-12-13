import React from 'react';
import ProjectCard from './ProjectCard.js';
import TheProjects from '../../data/TheProjects.js';

export default function Projects() {
    return (
      <div className="continer row-section">
          <div className="row mt-5 mb-3 text-center text-white">
              <div className="col-12">
                  <h1>My Projects</h1>
                  <p className="font-italic">More to come!</p>
              </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-auto mb-6">
                  <ProjectCard project={ TheProjects[0] }/>
              </div>
              <div className="col-auto mb-6">
                  <ProjectCard project={ TheProjects[1] }/>
              </div>
          </div>
      </div>
    )
}