import Badge from 'react-bootstrap/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = (p) => {
    return (
        <>
            <FontAwesomeIcon icon={faShoppingCart} color="#605ca8" />
            <Badge bg="success">{5}</Badge>
        </>
    )

}

export default CartWidget;