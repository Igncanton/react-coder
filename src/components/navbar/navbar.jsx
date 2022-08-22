import './navbar.css'
import React from 'react';

const Navbar = () => {
    return (
        <header className='header'>
            <a className="homeAnchor" href='#'><h1 className='navLogo'>Arcadia <span>retro games</span></h1></a>
            <nav className='navBar'>
                <ul className='ulDesktop'>
                    <li><a href='#'>Gameboy</a></li>
                    <li><a href='#'>Nintendo</a></li>
                    <li><a href='#'>Sega</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
