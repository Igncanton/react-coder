import './itemList.css'
import Item from '../item/item';

//ItemList component
const ItemList = ({ items }) => {

    return (
        <div className='itemList_container'>
            <div className='itemList_cardContainer'>

                {/* Map that iterates over the items array that is brought as a parameter, return individual item components */}
                {items.map((item) => {
                    return <Item id={item.id} key={item.game} name={item.game} year={item.year} price={item.price} img={item.img} />
                })}

            </div>
        </div>
    );
}

export default ItemList;
