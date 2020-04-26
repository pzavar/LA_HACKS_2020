
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faShoppingCart, faHistory, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import "./nav.css";

function SideBar(props) {
    return (
        <Menu {...props}>
            <Link to="/home" className="bm-item">
                <FontAwesomeIcon icon={faHome} size="2x" style={{marginRight:10}}/>
                Home
            </Link>

            <Link to="/search" className="bm-item">
                <FontAwesomeIcon icon={faSearch} size="2x" style={{marginRight:20}}/>
                Search
            </Link>

            <Link to="/grocery" className="bm-item">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{marginRight:20}}/>
                Grocery List
            </Link>
            
            <Link to="/history" className="bm-item">
                <FontAwesomeIcon icon={faHistory} size="2x" style={{marginRight:10}}/>
                History
            </Link>

            <Link to="/settings" className="bm-item">
                <FontAwesomeIcon icon={faCog} size="2x" style={{marginRight:10}}/>
                Settings
            </Link>

            <Link to="/login" className="bm-item">
                <FontAwesomeIcon icon={faSignOutAlt} size="2x" style={{marginRight:10}} />
                Sign Out
            </Link>

        </Menu>
    )
}

export default SideBar;

/*


*/