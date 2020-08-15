import React from 'react';
import './SkillBar.css';

export default function SkillBar({ skillSet }) {

    const skillScoreStyle = {
        width: `${skillSet.score}%`
    }

    return (
        <div className="skill">
            <div className="skill-name">{ skillSet.skill }</div>
            <div className="skill-bar">
                <div className="skill-score" score={ skillSet.score } style={skillScoreStyle}></div>
            </div>
        </div>
    )
}
