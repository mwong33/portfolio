import React from 'react'
import {Card} from 'react-bootstrap';
import './ExperienceCard.css'

export default function ExperienceCard({experience}) {

    return (
        <div className="row">
            <div className="col-12 mt-3 mb-3">
                <Card className="shadow">
                    <Card.Body>
                        <Card.Title>{ experience.company }</Card.Title>
                        <Card.Subtitle className="mb-2">{ experience.title }</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{ experience.location }</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{ experience.time }</Card.Subtitle>
                        <Card.Text>
                            { experience.summary }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
