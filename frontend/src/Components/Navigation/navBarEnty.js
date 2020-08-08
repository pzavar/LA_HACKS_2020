import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';

import './nav.css';


export default function NavBarEnty() {
    return (
        <Navbar style={{paddingLeft:0}}>
            <Navbar.Brand style={{left: 0}}><Link to="/" ><img id="logo-img" src={Logo} alt="LOGO"/></Link></Navbar.Brand>
                
            
            <Nav className="ml-auto">
                <Nav.Item> <Link to="/about" id="link-text">About</Link> </Nav.Item>
            </Nav>
    </Navbar>
    )
}


// <a className="brand-logo-text" href="/">Munchies</a>
// <img className="brand-logo-img" src={Logo}/>