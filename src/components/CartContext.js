import { createContext, useContext, useState } from 'react';

/* import { WindowModalContext } from './WindowModalContext' */

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);

    /* const windowModalContext = useContext(WindowModalContext); */


    const addItem = (item, quantity) => {
        //console.log('item - quantity', item, quantity);
        
        console.log('addItem - setCartList', cartList);
        console.log('addItem - item.id', item.id);

        if(isInCart(item.id)) {
            //windowModalContext.handleShow('El producto ya se encuentra en el carrito');  
            alert('El producto ya se encuentra en el carrito');            
            return false;
        }

        setCartList(oldCartList => 
            [
                ...oldCartList, 
                {
                id: item.id,
                title: item.title,
                pictureUrl: item.pictureUrl,
                price: item.price,
                quantity: quantity
               }
            ]
        )

        console.log('setCartList', cartList);
    }

    const removeItem = (itemId) => {
        console.log('itemId', itemId)
        setCartList(oldCarList => 
            [...oldCarList.filter(item => item.id !== itemId)]
        )
    }

    const clear = () => {
        setCartList([]);
    }

    const isInCart = (id) => {
        return cartList.find(item => item.id === id) !== undefined;
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;