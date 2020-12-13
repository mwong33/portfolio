import React, {useEffect} from 'react'
import {Card} from 'react-bootstrap';
import './ExperienceCard.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function ExperienceCard({experience}) {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
        <div className="col-xl-6 col-12 mt-3 mb-3" data-aos="flip-down">
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
    )
}
