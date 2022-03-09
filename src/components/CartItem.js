import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import { useContext} from 'react';
import { CartContext } from './CartContext';

const CartItem = (item) => {
    const cartContext = useContext(CartContext);
    
    const removeItem = (itemId) => {
        cartContext.removeItem(itemId);
    } 
    return (
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

export default CartItem;