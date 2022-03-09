import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Item from './Item'

import { useContext, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import db from '../utils/firabaseConfig'
import { collection, getDocs, query, where } from 'firebase/firestore'

import { AlertContext } from './AlertContext';

const ItemListContainer = () => {

    const [ items_array, setItems] = useState([]);

    const { categoryId } = useParams();

    const alertContext = useContext(AlertContext);

    const [ textError, setTextError ] = useState('');

    const getItems = async (categoryId) => {
      try{
        
        const queryCollection = 
          categoryId === undefined ?
          query(collection(db, "products")) :
          query(collection(db, "products"), where("categoryId", "==", categoryId));
        const querySnapshot = await getDocs(queryCollection);
        
        return querySnapshot.docs
          .map(
            document => ({
              id: document.id,
              ...document.data()
            })
          )
      }
      catch (e) {
        console.error(e);
      }
    }

    useEffect(() => {
      getItems(categoryId)
        .then(result => setItems(result))
        .catch(e => setTextError(e))
        }
        , [categoryId] 
    )

    return (
        <>
          {
          items_array.length === 0 ?
          alertContext.showError(textError) :
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
          }
        </>
    )

}

export default ItemListContainer