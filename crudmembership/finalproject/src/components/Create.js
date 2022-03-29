import React, {useState} from "react";
import Read from './Read';
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';
import Update from "./Update";

export default function Create(){
    const navigate = useNavigate();
    const [memberID, setMemberID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
  

    const postData = () => {
        axios.post(`https://62219aaaafd560ea69b4a13e.mockapi.io/memberID`,{
            memberID,
            firstName,
            lastName,
            email,
            dob,       
        }).then(() =>{
            reloadPage();
        })
    }

    const reloadPage = () => {
        window.location.reload(false);
    }

    return(
        <>
        <div className="container">
            <h1 className="registrationForm"> Register to became a VIP Member</h1>
            <h5>
                Our VIP member receive a first class service.<br/> fill the form bellow to received the following word class services at all time.
                <ul>
                    <li>Exclusive products</li>
                    <li>Unique recurring experiential rewards</li>
                    <li>Personalized recommendations</li>
                    <li>No point expiration</li>
                    <li>Gamification through exclusive tiers</li>
                </ul>
            </h5>

        </div>
        <h3 className="registrationForm"> VIP Registration Form</h3>
        <div className="create">
            <div className="form-floating mb-2">
                 <input type="memberID" className="form-control" id="floatingInput" placeholder="memberID" onChange={(e) => setMemberID(e.target.value)}></input>
                 <label>Member ID</label>
            </div>
            <div className="form-floating mb-2">
                <input type="firstName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setFirstName(e.target.value)}></input>
                <label>First Name</label>
            </div>
            <div className="form-floating mb-2">
                <input type="lastName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setLastName(e.target.value)}></input>
                <label>Last Name</label>
            </div>
            <div className="form-floating mb-2">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}></input>
                <label>Email address</label>
            </div>
            <div className="form-floating mb-2">
                <input type="date" className="form-control" id="floatingInput" placeholder="dob" onChange={(e) => setDOB(e.target.value)}></input>
                <label>DOB</label>
            </div>
            <div className="form-floating mb-2">
            </div>
            <div>
            <button type="button" className="btn btn-primary" onClick={postData}>Submit</button>
            </div>
            

        </div>
        <Read/>
        
        </>
    );
   
}