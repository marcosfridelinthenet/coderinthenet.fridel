import Badge from 'react-bootstrap/Badge';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; 

const CartWidget = (p) => {
    return (
        <>
            <a className="nav-link" href="#">
                <FontAwesomeIcon icon={faShoppingCart} color="#605ca8" />
                <Badge bg="success" className="badge-warning navbar-badge">{6}</Badge> 
            </a>
        </>
    )

}

export default CartWidget;