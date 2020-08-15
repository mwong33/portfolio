import React from 'react';
import './SkillBar.css';
import $ from 'jquery';

export default function SkillBar({ skillSet }) {

    $('.skill-score').each(() => {
        let $this = $(this);
        let score = $this.attr('score');
        $this.css("width", score+'%');
        $({animatedValue: 0}).animate({animatedValue: score},{
            duration: 1000,
            step: function() {
                $this.attr('score', Math.floor(this.animatedValue));
            }
        });
    });

    return (
        <div class="skill">
            <div class="skill-name">{ skillSet.skill }</div>
            <div class="skill-bar">
                <div class="skill-score" score={ skillSet.score }></div>
            </div>
        </div>
    )
}
