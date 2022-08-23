import React from 'react';
import './itemListContainer.css'

const Itemlistcontainer = (props) => {
    return (
        <div className='itemListContainer'>
            <h1 className='itemListContainer__title'>{props.greeting}</h1>
        </div>
    );
}

export default Itemlistcontainer;
