import './navbar.css'
import React, { useState } from 'react';
import CartWidget from './cartWidget/cartWidget';
import navBtn__open from './navBtn__open.svg';
import navBtn__close from './navBtn__close.svg';
import { NavLink } from 'react-router-dom';

//Navbar component
const Navbar = () => {

    //Responsiveness of the menu
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
            {/* Logo to homepage navigation */}
            <NavLink className="homeAnchor" to='/'><h1 className='navLogo'>Arcadia <span>retro games</span></h1></NavLink>

            <nav className='navBar'>
                {/* Navigation links */}
                <ul className='ulDesktop' id='responsiveNav'>
                    <li><NavLink to='/' >All</NavLink></li>
                    <li><NavLink to='/category/Gameboy'>Gameboy</NavLink></li>
                    <li><NavLink to='/category/Nintendo'>Nintendo</NavLink></li>
                    <li><NavLink to='/category/Sega'>Sega</NavLink></li>
                </ul>

                {/* CartWidget */}
                <CartWidget />

                {/* Btn open - close toggle */}
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
