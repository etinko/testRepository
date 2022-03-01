import React from 'react';
import Navbar from './Navbar';
import LogingForm from './LogingForm';
export default class MainPage extends React.Component {
    render (){
        return (
       <div>
           <>
           <Navbar/>
             <LogingForm/>
           </>
             
       </div>
        );
    }
}