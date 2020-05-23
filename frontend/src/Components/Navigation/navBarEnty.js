import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/carrot.png';


export default function NavBarEnty() {
    return (
        <Navbar>
            <div className="brand-logo-wrapper">
                <img className="brand-logo-img" src={Logo}/>
                <a className="brand-logo-text" href="/">Munchies</a>
            </div>
            <Nav className="ml-auto">
                <Nav.Item> <Link to="/about" id="link-text">About</Link> </Nav.Item>
            </Nav>
    </Navbar>
    )
}


