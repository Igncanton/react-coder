import './itemCount.css'
import React, { useState } from 'react';

// ItemCount Component
const Itemcount = ({ stockProduct, addToCart }) => {
    //Updates the stock amount
    const [stock, setStock] = useState(stockProduct)

    //Updates the amount of items added
    const [count, setCount] = useState(0);

    function addItem() {
        if (count < stockProduct) {
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

    function addCartUpdateStock() {
        addToCart(count)
        setStock(stock - count)
        setCount(0)
    }

    return (
        <div className='itemCount_container'>
            <p className='itemCount_stock'>Disponible: <span>{stock}</span></p>
            <div className='itemCount_btnContainer'>
                <button className='itemCount_btn' onClick={() => substractItem()}>-</button>
                <p className='itemCount_count'>{count}</p>
                <button className='itemCount_btn' onClick={() => addItem()}>+</button>
            </div>
            <button className='itemCount_addCartBtn' onClick={() => addCartUpdateStock()}>add to cart</button>
        </div>
    );
}

export default Itemcount;
