import React from 'react';
import cartWidgetIcon from './cartNav.svg'
import './cartWidget.css'

//CartWidget component
const CartWidget = () => {
    return (
        <div className='cartWidtget__container'>
            <img className='cartWidget__icon' src={cartWidgetIcon} alt='navbar shopping cart' style={{ width: '20px' }} />
            <p className='cartWidget_itemsAmount'>0</p>
        </div>
    );
}

export default CartWidget;
