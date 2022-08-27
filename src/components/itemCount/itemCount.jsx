import './itenCount.css'
import React, { useState } from 'react';


const Itemcount = () => {
    const [stock, setStock] = useState(5)
    const [count, setCount] = useState(0);

    function addItem() {
        if (count < 5) {
            setCount(count + 1)
            setStock(stock - 1)
        }
    }

    function substractItem() {
        if (count > 0) {
            setCount(count - 1)
            setStock(stock + 1)
        }
    }

    return (
        <div className='itemCount_container'>
            <p className='itemCount_stock'>Disponible: <span>{stock}</span></p>
            <div className='itemCount_btnContainer'>
                <button className='itemCount_btn' onClick={() => substractItem()}>-</button>
                <p className='itemCount_count'>{count}</p>
                <button className='itemCount_btn' onClick={() => addItem()}>+</button>
            </div>
            <button className='itemCount_addCartBtn'>add to cart</button>
        </div>
    );
}

export default Itemcount;
