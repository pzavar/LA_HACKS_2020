import React from'react';
import { Navbar } from 'react-bootstrap';
import Logo from '../../Assets/carrot.png';
import "../Styles/styles.css";

export const NavigationBar = () => (
    <Navbar>
        <div className="logo-wrapper">
            <img id="navbar-logo" src={Logo}/>
            <a className="NavBarText" href="/home">Munchies</a>
        </div>
    </Navbar>
)