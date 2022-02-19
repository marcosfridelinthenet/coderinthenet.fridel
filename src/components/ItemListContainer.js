import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from './Item'

import { useState } from 'react';
import { useEffect } from 'react';

import {items_array_promise} from '../utils/items_array_promise'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [items_array, setItems] = useState([]);

    const {categoryId} = useParams();

    console.log('categoryId', categoryId);

    //console.log(items_array_promise.filter(item =>  item.idCategory == idCategory));

    const getItems = (timeout) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('timeout promise');
            items_array_promise.filter(item => categoryId === undefined || item.categoryId == categoryId).length ? 
                resolve(items_array_promise.filter(item => categoryId === undefined || item.categoryId == categoryId)) : 
                reject('No se encontraron productos');
            }, timeout)
        });
      };
    

    useEffect(() => {
        getItems(2000)
          .then((items_list) => {
            setItems(items_list)})
          .catch((e) => {console.log(e)})
        }, [categoryId]
    )

    return (
        <>
             <Container> 
                <Row xs={1} md={4} className="g-4">
                {
                items_array.map(e =>
                    <Item 
                        key={e.id} 
                        id={e.id} 
                        title={e.title} 
                        price={e.price} 
                        pictureUrl={e.pictureUrl}
                        description={e.description}></Item>
                    )
                }

                </Row>
             </Container> 
            {/*    */}
        </>
    )
}

export default ItemListContainer