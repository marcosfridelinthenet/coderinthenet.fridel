import '../css/coder_inthenet.css'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
/* import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col' */

import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';

const Cart = () => {

    const cartContext = useContext(CartContext);

    const removeItem = (itemId) => {
        console.log('removeItem - itemId', itemId);
        cartContext.removeItem(itemId);
    } 
    const clearItems = () => {
        console.log('clear ');
        cartContext.clear();
    } 

    //console.log('cartContext.cartList', cartContext.cartList);

    return (
        <>
            
            <Container> 
                <Button variant="info" onClick={clearItems}>Eliminar todos los productos</Button>

                <Table bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Importe total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        //console.log('cartContext.cartList', cartContext.cartList);
                        cartContext.cartList.map(item => 
                            <tr>
                                <td><Image  src={item.pictureUrl} className='item_image' alt="" /></td>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>$ {item.price}</td>
                                <td>$ {item.price * item.quantity}</td>
                                <td><Button key={item.id} variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button></td>
                            </tr>
                            )
                    } 
                    </tbody>
{/*                 <Row >
                    <Col></Col>
                    <Col>Producto</Col>
                    <Col>Cantidad</Col>
                    <Col>Precio unitario</Col>
                    <Col>Importe total</Col>
                    <Col>Acciones</Col>

                </Row>

                {
                        //console.log('cartContext.cartList', cartContext.cartList);
                        cartContext.cartList.map(item => 
                <Row >
                    <Col>
                        <Card.Img  src={item.pictureUrl} className='item_image' alt=""   />
                    </Col>
                    <Col>
                        {item.title}
                    </Col>
                    <Col>
                        {item.quantity}
                    </Col>
                    <Col>
                        $ {item.price}
                    </Col>
                    <Col>
                        $ {item.price * item.quantity}
                    </Col>
                    <Col>
                        <Button key={item.id} variant="danger" onClick={() => removeItem(item.id)}>Eliminar</Button>
                    </Col>

                </Row>
                        )
                    } */}
                </Table>
            </Container>
        </>
    )
}

export default Cart;