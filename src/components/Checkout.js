import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <>
            <div className="col-md-3">
                <Link to="/cart"><button type="button" className="btn btn-block bg-warning block-100">Ir al carrito</button></Link>
            </div>
        </>
    )
}

export default Checkout;