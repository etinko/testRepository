import React from "react";
import {Card, CardGroup,Row, Col} from 'react-bootstrap';
import { faMessage, faPhoneSquareAlt, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

function ContactUs(){
    return(
<>
<Card className="bg-dark text-dark">
  <Card.Img src="https://www.olt.com/main/home/images/customerservice2.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Contact Us</Card.Title>
    <Card.Text>
      <h3 className="help">We are here to help</h3>
    </Card.Text>
  </Card.ImgOverlay>
</Card>

<><br/><br/><br/>

<CardGroup>
<Card className="card1" border="success" style={{ width: '18rem' }}>
  <Card.Header><FontAwesomeIcon className="icons" icon={faFacebookSquare} /></Card.Header>
    <Card.Body>
      <Card.Title>Facebook Contact</Card.Title>
      <Card.Text>
      Follow us on Facebook for more news about our activities
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>

  <Card >
    <Card.Body>
      <Card.Text>  
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className="card2" border="success" style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Header><FontAwesomeIcon className="icons" icon={faPhoneSquareAlt} /></Card.Header>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
      Phone Support is Available 24/7
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup><br/><br/><br/><br/>
<CardGroup>
    <Card className="card3" border="success" style={{ width: '18rem' }}>
          <Card.Header><FontAwesomeIcon className="icons" icon={faMessage} /></Card.Header>
          <Card.Body>
            <Card.Title>Live Chat</Card.Title>
            <Card.Text>
            Chat with a customer service representative in real time
            </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
  </Card>

  <Card className="card1" >
    <Card.Body>
      <Card.Text>  
      </Card.Text>
    </Card.Body>
  </Card>
  
  <Card className="card4" border="success" style={{ width: '18rem' }}>
        <Card.Header><FontAwesomeIcon className="icons" icon={ faQuestion} />FAQ</Card.Header>
        <Card.Body>
          <Card.Title>Knowledge Base</Card.Title>
          <Card.Text>
          'View a categorized listing of all common frequently asked questions
          </Card.Text>
          </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup><br/><br/>
</>
</>

    );
}
export default ContactUs