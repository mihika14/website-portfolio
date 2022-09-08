import React from "react";
import '../style.css';

function Navbar() {
    return(
    <div className="ui container">
    <div className="title">
        Technova
    </div>
    <br />
   <div className="ui menu">
        <a href="/" className="white item">
            Home
        </a>
        <a href="/Services" className="white item">
            Our Services
        </a>
        <a href="/Career" className="white item">
          Career
        </a>
    </div>
    </div>
)}
export default Navbar;

