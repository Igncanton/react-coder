import React, { useState, useEffect } from 'react';
import ItemDetail from './itemDetail/itemDetail';
import productsDB from '../../database/products.json';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';

// Itemdetailcontainer
const ItemDetailContainer = () => {
    //Updates the item state that it's used as a parameter in the ItemDetail component in the return
    const [item, setItem] = useState({});

    //Param used for router navigation
    const { itemId } = useParams();

    //Updates the loading state to control conditional rendering
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //Promise that brings the products from the database
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(productsDB), 2000);
        });

        promise.then((response) => setItem(response.find(game => game.id === parseInt(itemId))))

        //Updates the loading state after the promise has been resolve
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    return (
        <div className='itemDetailContainer'>
            {loading ? (<LoadingSpinner />) : (<ItemDetail item={item} />)}
        </div>
    );
}

export default ItemDetailContainer;
