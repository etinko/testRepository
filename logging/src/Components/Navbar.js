import React from 'react';
export default class Navbar extends React.Component {
    render (){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="Home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="About Us">About Us</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="Contact Us">Contact Us</a>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="Career">Career</a>
                  </li>
                  
                  
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          
        );
    }
}