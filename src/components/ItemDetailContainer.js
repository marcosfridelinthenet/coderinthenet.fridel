import { useEffect, useState } from "react";


import {items_array_promise} from '../utils/items_array_promise'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const getItem = (timeout) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                items_array_promise ? resolve(items_array_promise[0]) : reject('Producto no encontrado')
            }, timeout
            )
        })
    }

    useEffect(() => {
        getItem(2000)
            .then(response => setItem(response))
            .catch(reject => console.log(reject))
    }, [])

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