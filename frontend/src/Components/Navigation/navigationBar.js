import React from'react';
import { Nav, Navbar } from 'react-bootstrap';
import "../Styles/styles.css"

export const NavigationBar = () => (
    <Navbar>
        <Navbar.Brand href="/home" className="HeaderFont">Munchies</Navbar.Brand>
    </Navbar>
)