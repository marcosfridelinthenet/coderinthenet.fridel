import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <Link to="/cart" className="d-grid gap-2">
                <Button variant="warning">Ir al carrito</Button>
            </Link>
        </>
    )
}

export default Checkout;