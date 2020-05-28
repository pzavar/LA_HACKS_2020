import React from'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import "../Styles/styles.css";

export const NavigationBar = () => (
    <Navbar>
        <div className="logo-wrapper">
            <Link className="NavBarText" id="nav-bar-middle" to="/home"><img id="nav-bar-img" src={Logo}/></Link>
        </div>
    </Navbar>
)