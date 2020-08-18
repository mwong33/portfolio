import React from 'react'
import { Card, Button } from 'react-bootstrap';
 
export default function ProjectCard({project}) {
    return (
        <Card style={{ width: '18rem' }} className="h-100">
            <Card.Img variant="top" src={ project.image } />
            <Card.Body className="d-flex flex-column">
                <Card.Title>{ project.name }</Card.Title>
                <Card.Text>
                    { project.description }
                </Card.Text>
                <Button variant="primary mt-auto">View Project</Button>
            </Card.Body>
        </Card>
    )
}
