import { useEffect, useState } from 'react';
import FuzzySearch from 'fuzzy-search';


export default function ApiFetch() {
    const [shoppingItems, setShoppingItems] = useState([]);

    useEffect(() => {
        async function getData() {
          const response = await fetch("https://fetch-me.vercel.app/api/shopping/items");
          const data = await response.json();
          setItems(data.data);
        }
        getData();
      }, []);
    }