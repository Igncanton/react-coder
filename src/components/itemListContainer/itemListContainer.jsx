import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemListContainer.css";
import productsDB from "../../database/products.json";
import ItemList from "./itemList/itemList";
import LoadingSpinner from "../loadingSpinner/loadingSpinner";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

//ItemListContainer component
const ItemListContainer = (props) => {
  //Updates the items state once the items are brought from the database
  const [items, setItems] = useState([]);

  //Updates the loading state to control conditional rendering
  const [loading, setLoading] = useState(true);

  //Parameter used for router navigation
  const { categoryId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "arcadiaDB");

    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("console", "==", categoryId)
      );
      getDocs(queryFilter).then((res) =>
        setItems(res.docs.map((game) => ({ id: game.id, ...game.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setItems(res.docs.map((game) => ({ id: game.id, ...game.data() })))
      );
    }
  }, [categoryId]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3200);
  }, [categoryId]);

  return (
    <div className="itemListContainer">
      <h1 className="itemListContainer__title">{props.greeting}</h1>
      <h2 className="itemList_title">{`${
        categoryId !== undefined ? categoryId : "Game"
      }'s Catalogue`}</h2>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ItemList items={items} category={categoryId} />
      )}
    </div>
  );
};

export default ItemListContainer;
