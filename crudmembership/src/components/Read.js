import axios from 'axios';
import { data } from 'jquery';
import { Button} from 'react-bootstrap';
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
        let { id,memberID, firstName, lastName, email,platinum } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Member ID',memberID );
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', email );
        localStorage.setItem('Member Type', platinum);
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
        <div>
            <table class="table table-dark table-striped">
                <tr>
                    <th>Member ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date of Birth</th>
                    <th>Member Type</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
                <tb>
                    {APIData.map((data) =>{
                        return(
                    <tr>
                        <td>{data.memberID}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.dob}</td>
                        <td>{data.platinum ? 'PLATINUM': 'Gold'}</td>
                        <Link to = '/update'>
                            <td>
                                <Button className = 'btn btn-danger' onClick={() => setData(data)}>Update</Button>
                            </td>
                        </Link>
                        <td>
                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                        </td>
                    </tr>

                        )
                    })}
                    
                </tb>
  ...
            </table>
        </div>
    );





}
 