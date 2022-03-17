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
            navigate.push('/read')
        })
    }
    return(
        <>
        <div className="create">
            <div className="form-floating mb-3">
                 <input type="memberID" className="form-control" id="floatingInput" placeholder="memberID" onChange={(e) => setMemberID(e.target.value)}></input>
                 <label>Member ID</label>
            </div>
            <div className="form-floating mb-3">
                <input type="firstName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setFirstName(e.target.value)}></input>
                <label>First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="lastName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setLastName(e.target.value)}></input>
                <label>Last Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}></input>
                <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="floatingInput" placeholder="dob" onChange={(e) => setDOB(e.target.value)}></input>
                <label>DOB</label>
            </div>
            <div className="form-floating mb-3">
            </div>
            <div>
            <button type="button" className="btn btn-primary" onClick={postData}>Submit</button>
            </div>
            

        </div>
        <Read/>
        
        </>
    );
   
}