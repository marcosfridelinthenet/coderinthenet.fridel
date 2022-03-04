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
import { AlertContext } from './AlertContext';
import { Link } from 'react-router-dom';

import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from 'firebase/firestore'; 
import db from '../utils/firabaseConfig'

const Cart = () => {

    const cartContext = useContext(CartContext);
    const alertContext = useContext(AlertContext);

    const removeItem = (itemId) => {
        //console.log('removeItem - itemId', itemId);
        cartContext.removeItem(itemId);
    } 
    const clearItems = () => {
        //console.log('clear ');
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

        console.log(order);
    
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
                alert(`Orden creada - ${result.id}`);
                cartContext.clear();
            })
            .catch(error => console.log(error));
    }

    //console.log('cartContext.cartList', cartContext.cartList);

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
                    
                </Table>
                </> :
                <>
                    {alertContext.showInfo('No se encontraron items en el carrito')}
                    <Link to="/"><Button variant="info">Quiero seguir comprando</Button></Link>
                    
                </>
            }
        </Container>
        </>
    )
}

export default Cart;