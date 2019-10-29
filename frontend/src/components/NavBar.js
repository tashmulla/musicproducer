import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import '../App.css'
import { Link } from 'react-router-dom';


const NavBar = () => {

    const navStyle = {
        color: 'white'
    };

    return(
        <div>
            <nav className="nav">
                <h3>Music Composer</h3>
                <ul className="nav-links">
                    <Link style={navStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link style={navStyle} to="/glossary">
                        <li>Glossary</li>
                    </Link>
                    <Link style={navStyle} to="/editor">
                        <li>Track Editor</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;