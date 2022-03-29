import axios from 'axios';
import { data } from 'jquery';
import {Table, Card} from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://62219aaaafd560ea69b4a13e.mockapi.io/memberID`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id,memberID, firstName, lastName, email, dob} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Member ID',memberID );
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', email );
        localStorage.setItem('DOB', dob );
    }

    const getData = () => {
        axios.get(`https://62219aaaafd560ea69b4a13e.mockapi.io/memberID`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://62219aaaafd560ea69b4a13e.mockapi.io/memberID/${id}`)
        .then(() => {
            getData();
        })
    }
    return (
        <>
        <div>
            <img className='vipImage' src="https://lh3.googleusercontent.com/ZJflmiG4Tk9fTcpUhUvODaFZbi8MEkk7Xr16hy2f4LAmch0f0cDAhBSWwbYxfAKmUgg=h200" alt="Card image" />
        </div>
        <div className='read'><br/><br/>
            <h3 className='registrationForm'> Here is the list of All our VIP Members</h3><br/><br/>
            
            <Table striped bordered hover size= "sm">
                <thead>
                    <tr>
                        <th>Member ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                    {APIData.map((data) =>{
                        return(
                    <tr>
                        <td>{data.memberID}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.dob}</td>
                        <Link to = '/Update'></Link>   
                    </tr>
                        )
                    })}
                    
                </tbody>
            </Table>
            
        </div>
        </>
    )





}
 