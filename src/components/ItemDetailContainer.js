import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import db from '../utils/firabaseConfig'
import { doc, getDoc } from 'firebase/firestore'

import { AlertContext } from "./AlertContext";

import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [ item, setItem ] = useState({});
    const { itemId } = useParams();

    const [ textError, setTextError ] = useState('');

    const alertContext = useContext(AlertContext);

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