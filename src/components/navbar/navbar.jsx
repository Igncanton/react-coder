import './navbar.css'
import React, { useState } from 'react';
import Cartwidget from './cartWidget/cartWidget';
import navBtn__open from './navBtn__open.svg';
import navBtn__close from './navBtn__close.svg';


const Navbar = () => {
    const [btnToggle, setBtnToggle] = useState(true)

    const responsiveMenu = () => {
        const responsiveNav = document.getElementById('responsiveNav')


        if (btnToggle === false && responsiveNav.classList.contains('openNav') && responsiveNav.classList.contains('mobileNav')) {
            responsiveNav.classList.remove('openNav')
            setBtnToggle(!btnToggle);
            setTimeout(() => {
                responsiveNav.classList.remove('mobileNav')

            }, "500")
        }

        if (btnToggle === true && !responsiveNav.classList.contains('openNav') && !responsiveNav.classList.contains('mobileNav')) {
            responsiveNav.classList.add('mobileNav')
            setTimeout(() => {
                responsiveNav.classList.add('openNav')
                setBtnToggle(!btnToggle);
            }, "100")
        }
    }

    return (
        <header className='header'>
            <a className="homeAnchor" href='#'><h1 className='navLogo'>Arcadia <span>retro games</span></h1></a>
            <nav className='navBar'>
                <ul className='ulDesktop' id='responsiveNav'>
                    <li><a href='#'>Gameboy</a></li>
                    <li><a href='#'>Nintendo</a></li>
                    <li><a href='#'>Sega</a></li>
                </ul>
                <Cartwidget />
                <button onClick={() => { responsiveMenu() }} className='navBtn' id='navBtn'>
                    {btnToggle
                        ? <img src={navBtn__open} style={{ width: '20px' }} className='btnIcon' alt='open menu button' />
                        : <img src={navBtn__close} style={{ width: '20px' }} className='btnIcon' alt='close menu button' />}
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
