import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { data } from 'jquery';
import { Button} from 'react-bootstrap';
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom';

export default function Update(){
    const navigate = useNavigate();
    const [id,setID] = useState(null)
    const [memberID, setMemberID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
   

    useEffect(() =>{
        setID(localStorage.getItem('ID'));
        setMemberID(localStorage.getItem('Member ID'));
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setEmail(localStorage.getItem('Email'));
        
    },[]);

    const updateAPIData = () => {
        console.log("123");
        axios.put(`https://62219aaaafd560ea69b4a13e.mockapi.io/memberID/${id}`,{
            memberID,
            firstName,
            lastName,
            email,
            dob,       
        }).then(() =>{
          navigate('/')
     
        })
    }
    return(
        <div className="create">
            <div className="form-floating mb-3">
                 <input type="memberID" className="form-control" id="floatingInput" placeholder="memberID" onChange={(e) => setMemberID(e.target.value)} value= {memberID}></input>
                 <label>MemberID</label>
            </div>
            <div className="form-floating mb-3">
                <input type="firstName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setFirstName(e.target.value)}value= {firstName}></input>
                <label>First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="lastName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setLastName(e.target.value)}value= {lastName}></input>
                <label>Last Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}value= {email}></input>
                <label>Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="floatingInput" placeholder="dob" onChange={(e) => setDOB(e.target.value)}value= {dob}></input>
                <label>DOB</label>
            </div>
            <div>
            <button type="button" className="btn btn-primary" onClick={updateAPIData}>Update</button>
            </div>

        </div>
    )
}