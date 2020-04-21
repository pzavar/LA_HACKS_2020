import React from'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/carrot.png';
import "../Styles/styles.css";

export const NavigationBar = () => (
    <Navbar>
        <div className="logo-wrapper">
            <img id="navbar-logo" src={Logo}/>
            <Link className="NavBarText" to="/home">Munchies</Link>
        </div>
    </Navbar>
)