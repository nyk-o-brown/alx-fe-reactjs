import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
            <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;