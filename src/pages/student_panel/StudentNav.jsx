import React from "react";
import { Link } from "react-router-dom";
import "./_StudentNav.css";
import "./student_pages/StudentAccount.jsx";
import "./student_pages/History.jsx";
import "./student_pages/BooksIssued.jsx";
import "./student_search/Search.jsx";

const StudentNav = () => {
  const navigationStyle = {
    padding: "70px 50px"

  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    display: "block", // Display as block to arrange them in blocks
    marginBottom: "20px" // Equal spacing between blocks
  };

  const linkHoverStyle = {
    color: "lightblue"
  };

  return (
    <div style={navigationStyle} className="navigation-panel"> {/* Use the correct CSS class */}
      <nav>
        <ul className="link-list">
          <li><Link to="/student/home" style={linkStyle} activeStyle={linkHoverStyle}>Home</Link></li>
          <li><Link to="/student/search" style={linkStyle} activeStyle={linkHoverStyle}>Search</Link></li>
          <li><Link to="/student/history" style={linkStyle} activeStyle={linkHoverStyle}>History</Link></li>
          <li><Link to="/student/book-issued" style={linkStyle} activeStyle={linkHoverStyle}>Issued Books</Link></li>
          <li><Link to="/student/std-account" style={linkStyle} activeStyle={linkHoverStyle}>Account</Link></li>
          <li><Link to="/student/feed-back" style={linkStyle} activeStyle={linkHoverStyle}>Feedback</Link></li>
          <li><Link to="../login" style={linkStyle} activeStyle={linkHoverStyle}>Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default StudentNav;