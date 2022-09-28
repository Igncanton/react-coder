import React, { useState, useEffect } from "react";
import ItemDetail from "./itemDetail/itemDetail";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Itemdetailcontainer
const ItemDetailContainer = () => {
  //Updates the item state that it's used as a parameter in the ItemDetail component in the return
  const [item, setItem] = useState({});

  //Param used for router navigation
  const { itemId } = useParams();

  //Updates the loading state to control conditional rendering
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //Promise that brings the products from the database
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "arcadiaDB", itemId);
    getDoc(queryDoc).then((res) => setItem({ id: res.id, ...res.data() }));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [item]);

  return (
    <div className="itemDetailContainer">
      {loading ? <LoadingSpinner /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
