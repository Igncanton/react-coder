import './itemList.css'
import React from 'react';
import Item from '../item/item';


const Itemlist = ({ items }) => {

    return (
        <div className='itemList_container'>
            <h2 className='itemList_title'>- Games Catalogue -</h2>
            <div className='itemList_cardContainer'>
                {items.map((item) => {
                    return <Item id={item.id} key={item.game} name={item.game} year={item.year} price={item.price} img={item.img} />
                })}
            </div>
        </div>
    );
}

export default Itemlist;
