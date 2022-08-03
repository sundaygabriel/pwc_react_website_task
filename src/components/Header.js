import React from "react";

import { Link } from "react-router-dom";
import Photo from "./pwc.jpeg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={Photo} alt="" width="40" height="40" />
      </div>
      <div>
        <h3>PwC Career Website</h3>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contactus">Contact Us</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/applicationform">Application Form</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/studentsdata">Students Data</Link>
        <Link to="/Posts">Posts</Link>
        <Link to="/Todos">Todos</Link>
        <Link to="/Users">Users </Link>
        <Link to="/Conditional">Conditional</Link>
        <Link to="/Recruitmentform">Recruitment Form </Link>
      </div>
    </header>
  );
};

export default Header;
