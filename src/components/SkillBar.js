import React from 'react'

export default function SkillBar({ skillSet }) {
    return (
        <div>
            <p> {skillSet.skill} {skillSet.score}</p>
        </div>
    )
}
