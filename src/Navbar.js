import React from 'react';
import ReactDom from "react";
import "./Navbar.css";
import Notes from "./Notes";
import { Link } from "react-router-dom";
function Navbar(){
    return (<div>
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light" style={{background :" #121212;"}}>
        <div class="container-fluid">
          <a class="navbar-brand title" href="#">
            Srm-Hub
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link class="nav-link active"  to="/">Home</Link>
              {/* <a class="nav-link active" aria-current="page">
              Home
              </a> */}
              <Link class="nav-link active"  to="/Notes">Notes</Link>
              {/* <a class="nav-link active" href="#">
                Notes
              </a> */}
              <Link class="nav-link active"  to="/Restraunts">Restraunts</Link>
              {/* <a class="nav-link active" href="#">
                Restraunts
              </a> */}
    
              <a class="nav-link active" href="#">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>)
}
export default Navbar;