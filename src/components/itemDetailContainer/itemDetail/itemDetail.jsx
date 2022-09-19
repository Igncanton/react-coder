import React, { useState } from 'react';
import { useCartContext } from '../../../context/CartContext';
import Itemcount from '../../itemCount/itemCount';
import { Link } from 'react-router-dom'
import './itemDetail.css';

//ItemDetail component
const ItemDetail = ({ item }) => {

    const [cartAdded, setCartAdded] = useState(false);

    const { addItem } = useCartContext()

    const onAdd = (quantity) => {
        setCartAdded(true)
        addItem(item, quantity)
    }

    return (
        <div className='itemDetail'>
            <div className='detailContainer'>
                <div className='detailImgContainer'>
                    <img src={item.img} alt={item.game} />
                </div>
                <div className='detailInfoContainer'>
                    <h2>{item.game}</h2>
                    <p>Price: ${item.price}</p>
                    <p>Year: {item.year}</p>
                    <p className='detailInfoContainer__description'>{item.description}</p>

                    {
                        cartAdded
                            ? <Link to='/cart'><button className='addToCart__btn'>Go To Cart
                            </button></Link>
                            : <Itemcount stockProduct={item.stock} addToCart={onAdd} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
