
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUtensils, faListUl, faHistory, faCog} from '@fortawesome/free-solid-svg-icons'
import "./nav.css";

function SideBar(props) {
    return (

        <Menu {...props}>
            <Link to="/home" className="bm-item">
                <FontAwesomeIcon icon={faHome} size="2x" style={{marginRight:10}}/>
                Home
            </Link>

            <Link to="/recipes" className="bm-item">
                <FontAwesomeIcon icon={faUtensils} size="2x" style={{marginRight:20}}/>
                Recipes
            </Link>


            <Link to="/grocery" className="bm-item">
                <FontAwesomeIcon icon={faListUl} size="2x" style={{marginRight:10}}/>
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

        </Menu>
    )
}

export default SideBar;

/*


*/