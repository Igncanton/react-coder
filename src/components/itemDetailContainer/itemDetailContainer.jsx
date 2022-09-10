import React, { useState, useEffect } from 'react';
import Itemdetail from './itemDetail/itemDetail';
import productsDB from '../../database/products.json';
import { useParams } from 'react-router-dom';

const Itemdetailcontainer = () => {
    const [item, setItem] = useState({});

    const { itemId } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(productsDB), 2000);
        });

        promise.then((response) => setItem(response.find(game => game.id === parseInt(itemId))))
    }, [])

    return (
        <div className='itemDetailContainer'>
            <Itemdetail item={item} />
        </div>
    );
}

export default Itemdetailcontainer;
