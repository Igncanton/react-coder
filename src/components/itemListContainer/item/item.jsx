import './item.css'
import React from 'react';
import { Link } from 'react-router-dom';

//Item component used for each individual item needed in ItemList
const Item = ({ id, name, year, price, img }) => {

    return (
        <div className='itemCard_container'>
            <div className='itemCard_imgContainer'>
                <img className='itemCard_img' src={img} alt={name} />
            </div>
            <h3 className='itemCard_title'>{name}</h3>
            <p className='itemCard_year'>released: {year}</p>
            <p className='itemCard_price'>${price}</p>
            <Link to={`/itemDetail/${id}`}><button className='itemCard_detailsBtn'>More details</button></Link>
        </div>
    );
}

export default Item;
