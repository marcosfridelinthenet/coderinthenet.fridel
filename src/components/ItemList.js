import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from './Item'

import { useState } from 'react';
import { useEffect } from 'react';

import {items_array_promise} from '../utils/items_array_promise'

const ItemList = () => {

    const [items_array, setItems] = useState([]);

    console.log(items_array_promise);

    const getItems = (timeout) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('timeout promise');
            items_array_promise ? resolve(items_array_promise) : reject('No se encontraron productos');
            }, timeout)
        });
      };
    

    useEffect(() => {
        getItems(2000)
          .then((items_list) => {
            setItems(items_list)})
          .catch((e) => {console.log(e)})
        }, []
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

export default ItemList