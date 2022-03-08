import React, {useState} from "react";
import axios from "axios"; 
import { useNavigate } from 'react-router-dom';

export default function Create(){
    const navigate = useNavigate();
    const [memberID, setMemberID] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [platinum, setPlatinum] = useState(false);

    const postData = () => {
        axios.post(`https://62219aaaafd560ea69b4a13e.mockapi.io/memberID`,{
            memberID,
            firstName,
            lastName,
            email,
            dob, 
            platinum,      
        }).then(() =>{
            navigate.push('/read')
        })
    }
    return(
        <div className="create">
            <div className="form-floating mb-3">
                 <input type="memberID" className="form-control" id="floatingInput" placeholder="memberID" onChange={(e) => setMemberID(e.target.value)}></input>
                 <label for="floatingInput">MemberID</label>
            </div>
            <div className="form-floating mb-3">
                <input type="firstName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setFirstName(e.target.value)}></input>
                <label for="floatingInput">First Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="lastName" className="form-control" id="floatingInput" placeholder="name" onChange={(e) => setLastName(e.target.value)}></input>
                <label for="floatingInput">Last Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}></input>
                <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="date" className="form-control" id="floatingInput" placeholder="dob" onChange={(e) => setDOB(e.target.value)}></input>
                <label for="floatingInput">DOB</label>
            </div>
            <div className="form-floating mb-3">
                <form>
                    <checkbox label= 'Platinum Member' onChange={(e) => setPlatinum(!platinum)}/>
                </form>
            </div>
            <div>
            <button type="button" className="btn btn-primary" onClick={postData}>Submit</button>
            </div>

        </div>
    );
}