import '../css/coder_inthenet.css'

import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table';

import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
import { AlertContext } from './AlertContext';
import { Link } from 'react-router-dom';

import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from 'firebase/firestore'; 
import db from '../utils/firabaseConfig'

const Cart = () => {

    const cartContext = useContext(CartContext);
    const alertContext = useContext(AlertContext);
    
    const [ textInfo, setTextInfo ] = useState('No se encontraron items en el carrito');

    const clearItems = () => {
        cartContext.clear();
    } 

    const createOrder = () => {
        let order = {
            buyer: {
                email: 'marcos@inthenet.com.ar',
                name: 'Marcos Fridel',
                phone: '123456789'
            },
            date: serverTimestamp(),
            items: cartContext.cartList.map((item) => {
                return { id: item.id, title: item.title, price: item.price, quantity: item.quantity};
            }),
            total: cartContext.priceTotal()
        }
    
        const createOrderInFirestore = async () => {
            const newOrder = doc(collection(db, "orders"));
            await setDoc(newOrder, order);
            return newOrder;
        }

        createOrderInFirestore()
            .then(result => {
                cartContext.cartList.map(async (item) => {
                    await updateDoc(doc(db, "products", item.id), {
                        stock: increment(-item.quantity)
                    })
                });
                setTextInfo(`Orden creada - ${result.id}`);
                cartContext.clear();
            })
            .catch(error => console.log(error));
    }

    return (
        <>
        <Container> 
            {
                cartContext.cartList.length !== 0 ?
                <>
                <Button variant="info" onClick={clearItems}>Eliminar todos los productos</Button>
                <Button variant="success" onClick={createOrder}>Checkout!</Button>

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
                        cartContext.cartList.map(item => 
                            <CartItem
                                key={item.id} 
                                id={item.id} 
                                title={item.title} 
                                price={item.price} 
                                quantity={item.quantity}
                                pictureUrl={item.pictureUrl}
                                description={item.description}>                                
                            </CartItem>
                            )
                    } 
                    </tbody>
                    
                </Table>
                </> :
                <>
                    {alertContext.showInfo(textInfo)}
                    <Link to="/"><Button variant="info">Quiero seguir comprando</Button></Link>
                    
                </>
            }
        </Container>
        </>
    )
}

export default Cart;