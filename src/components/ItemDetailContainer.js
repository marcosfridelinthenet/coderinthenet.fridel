import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';


import {items_array_promise} from '../utils/items_array_promise'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {itemId} = useParams();

    console.log('itemId', itemId);
    console.log('items_array_promise', items_array_promise);

    const getItem = (timeout) => {
        return new Promise((resolve, reject) => {
            //console.log(items_array_promise.filter(item => item.id == itemId));
            setTimeout(() => {
                items_array_promise.filter(item => item.id == itemId) ? 
                    resolve(items_array_promise.find(item => item.id == itemId)) : 
                    reject('Producto no encontrado')
            }, timeout
            ) 
        })
    }

    useEffect(() => {
        getItem(2000)
            .then(response => setItem(response))
            .catch(reject => console.log(reject))
    }, [itemId])

    return (
        <>
            <ItemDetail
                key={item.id} 
                title={item.title} 
                price={item.price} 
                pictureUrl={item.pictureUrl}
                description={item.description}></ItemDetail>
        </>

    )
}

export default ItemDetailContainer;