import React from 'react';
import Itemcount from '.././itemCount/itemCount';
import './itemListContainer.css'

const Itemlistcontainer = (props) => {
    return (
        <div className='itemListContainer'>
            <h1 className='itemListContainer__title'>{props.greeting}</h1>
            <Itemcount />
        </div>
    );
}

export default Itemlistcontainer;
