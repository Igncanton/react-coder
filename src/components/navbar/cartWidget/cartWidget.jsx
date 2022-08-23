import React from 'react';
import cartWidgetIcon from './cartNav.svg'
import './cartWidget.css'

const Cartwidget = () => {
    return (
        <div className='cartWidtget__container'>
            <img className='cartWidget__icon' src={cartWidgetIcon} alt='navbar shopping cart' style={{ width: '20px' }} />
        </div>
    );
}

export default Cartwidget;
