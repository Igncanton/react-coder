import React from 'react';
import Itemcount from '../../itemCount/itemCount';
import './itemDetail.css';

//ItemDetail component
const ItemDetail = ({ item }) => {

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
                    <Itemcount stockProduct={item.stock} />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
