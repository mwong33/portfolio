import React from 'react';
import ExperienceCard from '../components/ExperienceCard.js';
import Experiences from '../data/experience.json';

export default function Experience() {

    return (
        <div id = "experience">
            <div className="container">
                {
                    Experiences.map((experience, index) => {
                        return <ExperienceCard key={ index } experience={ experience }/>
                    })
                }
            </div>
        </div>
    )
}
