import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Checkout from './Checkout';

import ItemCount from './ItemCount';

import { useEffect, useState, useContext } from 'react';
import { CartContext } from './CartContext';

const ItemDetail = (item) => {

    const cartContext = useContext(CartContext);

    //const [ itemCount, setItemCount ] = useState(cartContext.isInCart(item.id) ? cartContext.cartList.find(item_array => item_array.id === item.id).quantity : 0);
    const [ itemCount, setItemCount ] = useState(0);


    const onAdd = (qty) => {
        console.log(`Has seleccionado ${qty} items`);
        setItemCount(qty);
        cartContext.addItem(item, qty);
    }
    
    return (
        <div className="card card-solid">
            <div className="card-body">
                <div className="row">
            
                    <div className="col-12 col-sm-6">
                        <Col xs={12} md={12}>
                            <Card.Img variant="top" src={item.pictureUrl} className='item_image_detail' alt="" />
                        </Col>
                    </div>
                    <div className="col-12 col-sm-6">
                        <h3 className="my-3">{item.title}</h3>
                        <p>{item.description}</p>
                            <h2 className="mb-0">
                        {item.price === undefined ? '' : `$ ${item.price}`}
                        </h2>    
                        
                        {
                        itemCount === 0 ?  
                            item.price === undefined ? <></> : <ItemCount stock={item.stock} onAdd={onAdd} ></ItemCount>
                            :
                            <Checkout></Checkout> 
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ItemDetail;