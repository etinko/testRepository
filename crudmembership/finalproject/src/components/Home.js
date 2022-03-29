import React from "react";
import {Card, CardGroup,Nav, Navbar,Container} from 'react-bootstrap';
import ImageSlider from "./ImageSlider";
import { SliderData } from './SliderData';

function About(){
    return(
        
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        
        <Nav className="me-auto">
        </Nav>
        </Container>
    <Nav>
      <Nav.Link href="/create">Create</Nav.Link>
      <Nav.Link href="/readOnly">Read </Nav.Link>
      <Nav.Link href="/read">Donate </Nav.Link>
    </Nav>
      </Navbar>
     <ImageSlider slides={SliderData}/>
     <div className="welcome">
         <h2> Hello! <br/>  Thank you for visiting my final project application</h2>
     </div>
     <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://seasportboats.com/wp-content/uploads/2018/01/24-Exp-Cover--1440x576.jpg" height={300} />
    <Card.Body>
      <Card.Text className="quote">
      <h4>Greatness comes by doing a few small and smart things each and every day. Comes from taking little steps, consistently.
       Comes from a making a few small chips against everything in your professional and personal life that is ordinary, 
       so that a day eventually arrives when all that's left is The Extraordinary.
       </h4>

      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Robin S. Sharma</small>
    </Card.Footer>
  </Card>
  <Card>
    
    <Card.Body>  <br/> <br/> <br/> <br/> <br/>
      <Card.Title>What do you want to do?</Card.Title>
      <Card.Text>
          <br/>
        <ul>
            <li>register do became a <a href="/Create">VIP member</a>?</li> <br/>
            <li>see a complete list of our <a href="/ReadOnly">VIP member</a>?</li> <br/>
            <li> <a href="/Read">Donate </a> to our organization/</li> <br/>
            <li>Have questions or conserne feel free to <a href="/contactUS">contact Us</a>?</li> <br/>


        </ul>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://fishing-masters.com/wp-content/uploads/2018/12/1st-cast-1st-time-fishing.jpg" height={300} />
    <Card.Body>
      <Card.Text className="quote">
      <h4>If your emotional abilities aren't in hand, if you don't have self-awareness, if you are not able to manage your distressing emotions,
       if you can't have empathy and have effective relationships, then no matter how smart you are, you are not going to get very far.</h4>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Daniel Goleman</small>
    </Card.Footer>
  </Card>
</CardGroup>
      </>
       
    );
}
export default About;