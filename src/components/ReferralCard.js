import React from 'react'
import LinkedIn_Logo from '../images/LI-Logo.png';
import { Button, Card } from 'react-bootstrap';
import './ReferralCard.css';

export default function ReferralCard({referral}) {
    return (
        <div className="row">
            <div className="col-12 mt-3 mb-3">
                <Card>
                    <Card.Body>
                        <Card.Text className="h4">
                            "{ referral.snippet }"
                        </Card.Text>
                        <Card.Title className="text-right">{ referral.author }</Card.Title>
                        <Card.Subtitle className="text-right">{ referral.position } at {referral.company}</Card.Subtitle>
                        <div className="text-center">
                            <a href={ referral.pdf } className="link-unstyled">
                                <Button variant="primary">View Referral</Button>
                            </a>
                        </div>
                    </Card.Body>
                    <Card.Footer className="text-right">
                        <a href={ referral.linkedin }>
                            <img alt="LinkedIn" src={LinkedIn_Logo} className="footer-text"/>
                        </a>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    )
}
