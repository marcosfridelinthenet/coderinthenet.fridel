import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import db from '../utils/firabaseConfig'
import { doc, getDoc } from 'firebase/firestore'

//import {items_array_promise} from '../utils/items_array_promise'
import { AlertContext } from "./AlertContext";

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [ item, setItem] = useState({});
    const { itemId } = useParams();

    const [ textError, setTextError ] = useState('');

    const alertContext = useContext(AlertContext);

    //console.log('itemId', itemId);
    //console.log('items_array_promise', items_array_promise);

/*     const getItem = (timeout) => {
        return new Promise((resolve, reject) => {
            setTextError('');

            setTimeout(() => {
                try{
                    //console.log('setTimeout getItem');
                    //console.log('items_array_promise.filter(item => item.id == itemId).length', items_array_promise.filter(item => item.id == itemId).length);
                    items_array_promise.filter(item => item.id == itemId).length != 0 ? 
                        resolve(items_array_promise.find(item => item.id == itemId)) : 
                        reject('No se encontro el producto seleccionado');
                } catch (ex) {
                    reject(ex)
                }
            }, timeout) 
        })
    } */

    const getItem = async (itemId) => {
        const querySnapshot = await getDoc(doc(db, "products", itemId));
        if(querySnapshot.exists())
            return {
                id: itemId,
                ...querySnapshot.data()
            }
    }

    useEffect(() => {
        getItem(itemId)
            .then(result => setItem(result))
            .catch(e => setTextError(e))
/*         getItem(2000)
            .then(response => { setItem(response); console.log('response'); })
            .catch(reject => { setTextError(reject); console.log('reject', reject);  */
        
    }, [itemId])

    return (
        <>
            { alertContext.showError(textError) }
            <ItemDetail
                key={item.id} 
                id={item.id} 
                title={item.title} 
                price={item.price} 
                pictureUrl={item.pictureUrl}
                stock={item.stock}
                description={item.description}>
                    
                </ItemDetail>
        </>
    )
}

export default ItemDetailContainer;