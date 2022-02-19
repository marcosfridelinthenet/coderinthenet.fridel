import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = (p) => {
    
    const test = useContext(CartContext);
    
    console.log(test);

    return (
        <>
            <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} color="#605ca8" />
                <Badge bg="success" className="badge-warning navbar-badge">{6}</Badge> 
            </Link>
        </>
    )

}

export default CartWidget;