import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return(
        <div>
            <nav className="nav">
                <h3>Music Composer</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Track Editor</li>
                    </Link>
                    <Link style={navStyle} to="/glossary">
                        <li>Glossary</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;