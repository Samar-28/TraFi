import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// cant use <a> in react, instead, use <link> from react router dom
import { Link, useLocation } from "react-router-dom";
import Auth from "../utils/auth"
import log from "../assets/images/log.png"

export default function Header() {

  const loggedIn = Auth.loggedIn();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLoginPage = location.pathname === '/login';
  const isSignupPage = location.pathname === '/signup';


  return (

    <Navbar collapseOnSelect expand="sm" variant="dark" style={{background:!loggedIn?"none":"#945ac0b0"}}>
      {loggedIn ? (
        <>
          <Navbar.Brand as={Link} to="/" className="brand brand-logged d-flex align-items-center object-contain">
            <img alt="logo" style={{ display: "inline" }} src={log} className="log-icon" />
            <span style={{color:"black"}}>TraFi </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              {/* use eventKey to show navbar style from react bootstrap */}
              <Nav.Link as={Link} to="/exercise" eventKey="1" >Exercise</Nav.Link>
              <Nav.Link as={Link} to="/history" eventKey="2">History</Nav.Link>
              <Nav.Link onClick={Auth.logout} >Logout </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </>) :
        (<Navbar.Brand as={Link} to="/" className={`brand brand-new mx-auto d-flex align-items-center object-contain
          ${isLoginPage || isSignupPage ? "brand-text" : null}`} >
          <img alt="logo" style={{ display: "inline" }} src={log} className="log-icon" />
          <span style={{color:"black"}}>TraFi </span>
        </Navbar.Brand>)}
    </Navbar >
  );
}
