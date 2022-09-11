import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './itemListContainer.css';
import productsDB from '../../database/products.json';
import ItemList from './itemList/itemList';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';


//ItemListContainer component
const ItemListContainer = (props) => {

    //Updates the items state once the items are brought from the database
    const [items, setItems] = useState([]);

    //Updates the loading state to control conditional rendering
    const [loading, setLoading] = useState(true);

    //Parameter used for router navigation
    const { categoryId } = useParams()

    useEffect(() => {
        //Promise that brings the products from the database
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve(productsDB), 2000);
        });

        //Conditional to bring the respective items asked by the categoryId
        if (categoryId) {
            promise.then((response) => setItems(response.filter(games => games.console === categoryId)))
        } else {
            promise.then((response) => { setItems(response) })
        }

        //Updates the loading for mockyng the transition dealyed between navigations
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }, [categoryId])


    //Updates loading state for conditional rendering
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);


    return (
        <div className='itemListContainer'>
            <h1 className='itemListContainer__title'>{props.greeting}</h1>
            <h2 className='itemList_title'>{`${categoryId !== undefined ? categoryId : 'Game'}'s Catalogue`}</h2>
            {loading ? (<LoadingSpinner />) : (<ItemList items={items} category={categoryId} />)}
        </div>
    );
}

export default ItemListContainer;
