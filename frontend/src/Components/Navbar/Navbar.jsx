import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <a className="logo" href="#">Logo</a>
                <div className="navbar-pages">
                    <a className="navbar-link" href="#">Home</a>
                    <a className="navbar-link" href="#">About</a>
                    <a className="navbar-link" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;