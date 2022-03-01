import React from 'react';
export default class LogingForm extends React.Component {
    render (){
        return (
     <div className="bg-success p-2 text-dark bg-opacity-25">  
     <h3>Log In</h3>     
        <form className="px-5 py-5">
           <div className="mb-3">
                <label for="exampleDropdownForm" className="form-label">Username</label>
                <input type="Username" className="form-control" id="exampleDropdownFormUsername" placeholder="Username"></input>
            </div> 
            <div className="mb-3">
                 <label for="exampleDropdownFormPassword2" className="form-label">Password</label>
                 <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"></input>
            </div>
            <div className="mb-3">
                <div className="form-check">
                   <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                   <label className="form-check-label" for="dropdownCheck">
                         Remember me
                   </label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    </div>
            )
    }
}