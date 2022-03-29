import Read from "./Read";
import {Nav, Navbar,Carousel, Container,Card, CardGroup} from 'react-bootstrap';
import { faMessage, faPhoneSquareAlt, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookSquare, faTwitter, faInstagram, faYoutube, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return(
        <CardGroup className="footer">
            <Card.Footer className="text-muted">
                <h4> Final Project presented By Etienne Nkoume.</h4>
                <h5>Front End Software Developer  </h5>
                <h6>Section of Oct 2021</h6>
                <h6>with Southeast Community College</h6>
            </Card.Footer>
            <Card.Footer>
                <small className="small">
                <h6> Some useful Link on this project</h6>
                <ul>
                    <li><a href="/Home">Home</a></li><br/>
                    <li><a href="/AboutUs">About Us</a> </li><br/>
                    <li><a href="/ContactUs">Contact Us</a> </li><br/>
                    <li><a href="/register">Sign Up</a></li><br/>
                    <li> <a href="/Login">Log in</a></li>
                </ul>
                </small>
            </Card.Footer>
            <Card.Footer >
                <h6> follow us on our differnt social media page</h6>
                <ul>
                    <li> <a href="https://www.facebook.com/francisthepredatorngannou"><FontAwesomeIcon className="icon1" icon={faFacebookSquare} /></a>    </li>
                    <li> <a href="https://twitter.com/francis_ngannou?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FontAwesomeIcon className="icon2" icon={faTwitter} /></a> </li>
                    <li> <a href="https://www.instagram.com/francisngannou/?hl=en"><FontAwesomeIcon className="icon3" icon={faInstagram} /></a> </li>
                    <li> <a href="https://www.youtube.com/watch?app=desktop&v=1SBphZ9s_fs&feature=youtu.be"><FontAwesomeIcon className="icon4" icon={faYoutube} /></a> </li>
                    <li> <FontAwesomeIcon className="icon5" icon={faWhatsapp} /></li>
                </ul>
            </Card.Footer>
            <Card.Footer className="text-muted"><br/><br/><br/><br/>
                <h5>Copyright © 2021 - 2022 EtienneNkoume <br/>#frontend #bootCamp</h5>
            </Card.Footer>
        </CardGroup>
    );
}
export default Footer;