import React from "react";
import {Card, Button} from 'react-bootstrap';
import ImageSlider from "./ImageSlider";
import { SliderData } from './SliderData';

function About(){
    return(
        
      <>
     <ImageSlider slides={SliderData}/>
     <Card>
 
      <Card.Body>
        <Card.Title>is Vip Club not working / having issues for you?</Card.Title>
        <Card.Text>
          Vip Club app may not be working for you due to some issues that your device may have or your internet connection problem. 
          If you think that Vip Club app has an issue, please post your issue using the comment box below and someone from our community may help you.
          Also make sure you are register and log in as VIP member.
          </Card.Text>
        <Button variant="primary" >Register</Button>
        </Card.Body>
       </Card>
      </>
       
    );
}
export default About;