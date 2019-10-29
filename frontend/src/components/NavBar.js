import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import '../App.css'
import { Link } from 'react-router-dom';


const NavBar = () => {

    return(
        <div>
            <nav className="nav">
                <h3>UMG Music Composer</h3>
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/glossary">
                        <li>Glossary</li>
                    </Link>
                    <Link to="/editor">
                        <li>Track Editor</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;