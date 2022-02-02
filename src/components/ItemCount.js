import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/coder_inthenet.css'

import { useState } from 'react';

const ItemCount = () => {

    const [count, setCount] = useState(0);

    const ItemPlus = () => {
        setCount(count + (count >= 5 ? 0 : 1))
    }

    const ItemMinus = () => {
        setCount(count - (count <= 0 ? 0 : 1))
    }

    return (
        <>
                <div className="col-md-3">
                    <div className="input-group mb-3">
                        <span className="input-group-append">
                            <button className="btn btn-info btn-flat" onClick={() => ItemMinus()}>-</button>
                        </span>
                        <input type="text" class="form-control rounded-0 text-center" value={count}></input>
                        <span className="input-group-append">
                            <button className="btn btn-info btn-flat" onClick={() => ItemPlus()}>+</button>
                        </span>
                    </div>
                    <button type="button" class="btn  btn-outline-success btn-flat block-100">Agregar al carrito</button>
                </div>
        </>
    )
}

export default ItemCount