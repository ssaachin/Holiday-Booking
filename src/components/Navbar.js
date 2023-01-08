import React, { useState } from "react";
import styled from "styled-components";
import logo7 from "../assets/logo7.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import {Link} from "react-router-dom";
import Register from "./DropDownForms/Register";
import { DropdownButton, Tabs, Tab } from "react-bootstrap";
import Login from "./DropDownForms/Login";




export default function Navbar() {

    const [navbarState, setNavbarState] = useState(false);

    return (
      <>
        <Nav>
          <div className="brand">

            {/* Logo and brand name */}

            <div className="container">
              <img src={logo7} alt="" height="70"/>
              Sachin
            </div>

            {/* Responsive change */}

            <div className="toggle">
              {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
              ) : (
                <GiHamburgerMenu onClick={() => setNavbarState(true)} />
              )}
            </div>
          </div>
                
          {/* Navigates to one of the following list to book */}

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
              <li><Link to="/flights">Flights</Link></li>
              <li> <Link to="/stays"> Stays</Link></li> 
              <li><Link to="/activity"> Activities</Link></li>
          </ul>

          {/* DropDown Login/Register */}

          <DropdownButton style={{width:"15%", borderRadius:"2rem"}}
          id="dropdown-basic-button" title="Register/Login">

            {/* Tab for selecting login or register */}

            <Tabs defaultActiveKey="register" id="uncontrolled-tab-example" className="mb-3">
              <Tab style={{padding:"1rem"}} eventKey="register" title="Register">

                {/* Register form */}

                <Register />
              </Tab>

              <Tab style={{padding:"1rem"}} eventKey="login" title="Login">

                {/* Login Form */}

                <Login />
              </Tab>
            </Tabs>
          </DropdownButton>
        </Nav>
      </>
    );
  }
  
// CSS for this file

  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .brand {
      .container {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;
        font-size: 1.2rem;
        font-weight: 900;
        text-transform: uppercase;
        color: Teal;
        margin-color: Teal;
      }
      .toggle {
        display: none;
      }
    }
    ul {
      display: flex;
      gap: 1rem;
      list-style-type: none;
      li {
        a {
          text-decoration: none;
          font-weight: 900;
          color: Teal;
          font-size: 1.2rem;
          transition: 0.1s ease-in-out;
          &:hover {
            color: #023e8a;
          }
        }
      }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      .brand {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .toggle {
          display: block;
        }
      }
      ul {
        display: none;
      }
      DropDownButton {
        display: none;
      }
    }
  `;
  
  

