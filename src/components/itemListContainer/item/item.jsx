import './item.css'
import React from 'react';

const Item = ({ name, year, price, img }) => {
    return (
        <div className='itemCard_container'>
            <div className='itemCard_imgContainer'>
                <img className='itemCard_img' src={img} alt={name} />
            </div>
            <h3 className='itemCard_title'>{name}</h3>
            <p className='itemCard_year'>released: {year}</p>
            <p className='itemCard_price'>${price}</p>
            <button className='itemCard_detailsBtn'>More details</button>
        </div>
    );
}

export default Item;
