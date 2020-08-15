import React from 'react'
import SkillBar from './SkillBar.js'

export default function SkillBarGroup({ skills }) {
    return (
        skills.map(skillSet => {
            return <SkillBar key={ skillSet.skill } skillSet={ skillSet }/>
        })
    )
}
