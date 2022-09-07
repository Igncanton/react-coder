import React, { useState } from 'react';
import Itemdetail from './itemDetail/itemDetail';
import itemDB from '../../database/item.json'

const Itemdetailcontainer = () => {
    const [item, setItem] = useState([]);

    const promise = new Promise((resolve) => {
        setTimeout(() => resolve(itemDB), 2000);
    });

    promise.then((response) => {
        setItem(response)
    })

    return (
        <div className='itemDetailContainer'>
            <Itemdetail item={item} />
        </div>
    );
}

export default Itemdetailcontainer;
