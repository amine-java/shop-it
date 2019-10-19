import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

/**
 * Function that returns the Navigation Bar
 */
function NavBar() {

    return (<div>

        <ul className="nav">
            <Link to="/">
                <li>Shop</li>
            </Link>

            <Link to="/about">
                <li>About us</li>
            </Link>

            <Link to="/contact">
                <li>Contact us</li>
            </Link>
        </ul>
    </div>)
}

export default NavBar; 