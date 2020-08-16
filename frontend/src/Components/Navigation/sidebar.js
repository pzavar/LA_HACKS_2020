
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import "./nav.css";

function SideBar(props) {
    return (
        <Menu {...props}>
            {/* Home */}
            <Link to="/home" className="bm-item">
                <FontAwesomeIcon icon={faHome} size="2x" style={{marginRight:10}}/>
                Home
            </Link>

            {/* Grocery */}
            <Link to="/grocery" className="bm-item">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{marginRight:20}}/>
                Grocery List
            </Link>

            {/* Exit */}
            <Link to="/" className="bm-item">
            <FontAwesomeIcon icon={faSignOutAlt} size="2x" style={{marginRight:20}}/>
                Exit
            </Link>


        </Menu>
    )
}

export default SideBar;
