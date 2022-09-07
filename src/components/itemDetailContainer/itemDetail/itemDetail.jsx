import React, { useState, useEffect } from 'react';
import Itemcount from '../../itemCount/itemCount';
import './itemDetail.css';

const Itemdetail = ({ item }) => {
    const [stock, setStock] = useState(0);

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
                    <Itemcount stockProduct={20} />
                </div>
            </div>
        </div>
    );
}

export default Itemdetail;
