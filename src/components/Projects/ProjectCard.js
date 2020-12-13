import React from 'react'
import { Card, Button } from 'react-bootstrap';
import './ProjectCard.css'
 
export default function ProjectCard({project}) {

    return (
        <Card style={{ width: '18rem' }} className="h-100 border-0">
            <Card.Img variant="top" src={project.image}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title>{ project.name }</Card.Title>
                <Card.Text>
                    { project.description }
                </Card.Text>
                {project.link !== "" &&
                    <Button variant="primary mt-auto" target='_blank' rel="noopener noreferrer nofollow" href={ project.link }>View Project</Button>
                }
            </Card.Body>
        </Card>
    )
}
