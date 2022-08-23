import './navbar.css'
import React from 'react';
import Cartwidget from './cartWidget/cartWidget';



window.addEventListener('resize', () => {
    const viewportWidth = window.innerWidth

    if (viewportWidth < 850) {
        console.log(window.innerWidth)
    } else {
        console.log(window.innerWidth)
    }
})


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
                <Cartwidget></Cartwidget>
            </nav>
        </header>
    );
}

export default Navbar;
