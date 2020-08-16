import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap';
import './ExperienceCard.css'

export default function ExperienceCard({experience}) {

    const [buttonText, setButtonText] = useState("Show More");
    const [showDetails, setShowDetails] = useState(false);

    const toggleInfo = () => {
        if (buttonText === "Show More") {
            setButtonText("Show Less");
            setShowDetails(true);
        } else {
            setButtonText("Show More");
            setShowDetails(false);
        }
    }

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
                        {showDetails && <div className="container mt-4 mb-4">
                                <div className="row">
                                    <div className="col-sm-6 col-xs-12">
                                        <span className="font-weight-bold">More Details</span>
                                        <ul className="mt-2 mb-2">
                                            { experience.details.map((detail, index) => {
                                                return <li key={ index }>{detail}</li>
                                            }) }
                                        </ul>
                                    </div>
                                    <div className="col-sm-6 col-xs-12">
                                        <span className="font-weight-bold">Skills</span>
                                        <ul className="mt-2 mb-2">
                                        { experience.skills.map((skill, index) => {
                                                return <li key={ index }>{skill}</li>
                                            }) }
                                        </ul>
                                    </div>
                                </div>
                            </div> }
                        <div className="text-center">
                            <Button variant="outline-primary" onClick={() => toggleInfo() }>{buttonText}</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
