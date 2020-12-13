import React, {useEffect} from 'react'
import LinkedIn_Logo from '../../images/LI-Logo.png';
import { Button, Card } from 'react-bootstrap';
import './ReferralCard.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function ReferralCard({referral}) {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

    return (
        <div className="col-12 col-xl-4 mt-3 mb-3" data-aos="flip-right">
            <Card>
                <Card.Body>
                    <Card.Text>
                        "{ referral.snippet }"
                    </Card.Text>
                    <Card.Title><p>{ referral.author }</p></Card.Title>
                    <Card.Subtitle className="text-muted"><p>{ referral.position } at {referral.company}</p></Card.Subtitle>
                    <a href={ referral.pdf } className="link-unstyled">
                        <Button variant="primary">View Referral</Button>
                    </a>
                </Card.Body>
                <Card.Footer className="text-right">
                    <a href={ referral.linkedin }>
                        <img alt="LinkedIn" src={LinkedIn_Logo} className="footer-text"/>
                    </a>
                </Card.Footer>
            </Card>
        </div>
    )
}
