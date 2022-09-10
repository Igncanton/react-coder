import React, { useState, useEffect } from 'react';
import Itemcount from '.././itemCount/itemCount';
import Itemlist from './itemList/itemList';
import './itemListContainer.css';
import productsDB from '../../database/products.json';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);

    const { categoryId } = useParams()

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(productsDB), 2000);
        });

        if (categoryId) {
            promise.then((response) => setItems(response.filter(games => games.console === categoryId)))
        } else {
            promise.then((response) => { setItems(response) })
        }


    }, [categoryId])


    return (
        <div className='itemListContainer'>
            <h1 className='itemListContainer__title'>{props.greeting}</h1>
            <Itemlist items={items} />
            {/* <Itemcount stockProduct={5} /> */}
        </div>
    );
}

export default ItemListContainer;
