import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/coder_inthenet.css'


import { useState } from 'react';

const ItemCount = (props) => {

    const [count, setCount] = useState(1);
    
    const ItemPlus = () => {
        console.log('ItemPlus', count)
        setCount(count + (count >= props.stock ? 0 : 1))
    }

    const ItemMinus = () => {
        console.log('ItemMinus', count)
        setCount(count - (count === 1 ? 0 : 1))
    }

    const onAdd = () => {
        props.onAdd(count);
    }

    return (
        <>
            <div className="col-md-3">
                <div className="input-group mb-3">
                    <span className="input-group-append">
                        <button className="btn btn-info btn-flat" onClick={() => ItemMinus()}>-</button>
                    </span>
                    <input type="text" className="form-control rounded-0 text-center" value={count}></input>
                    <span className="input-group-append">
                        <button className="btn btn-info btn-flat" onClick={() => ItemPlus()}>+</button>
                    </span>
                </div>
                <button type="button" className="btn btn-outline-success btn-flat block-100" onClick={onAdd}>Agregar al carrito</button>
            </div>
        </>
    )
}

export default ItemCount