import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/coder_inthenet.css'

import Button from 'react-bootstrap/Button';

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
                        <Button variant="info" onClick={() => ItemMinus()} >-</Button>
                    </span>
                    <input type="text" className="form-control rounded-0 text-center" value={count}></input>
                    <span className="input-group-append">
                        <Button variant="info" onClick={() => ItemPlus()} >+</Button>
                    </span>
                </div>
                <Button variant="outline-success" onClick={onAdd} >Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount