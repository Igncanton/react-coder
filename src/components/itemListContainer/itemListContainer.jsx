import React, { useState } from 'react';
import Itemcount from '.././itemCount/itemCount';
import Itemlist from './itemList/itemList';
import './itemListContainer.css'
import productsDB from '../../database/products.json'

const Itemlistcontainer = (props) => {
    const [items, setItems] = useState([]);

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(productsDB), 2000);
    });

    promise.then((response) => {
        setItems(response)
    })

    return (
        <div className='itemListContainer'>
            <h1 className='itemListContainer__title'>{props.greeting}</h1>
            <Itemlist items={items} />
            <Itemcount stockProduct={5} />
        </div>
    );
}

export default Itemlistcontainer;
