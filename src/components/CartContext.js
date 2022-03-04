import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {

        if(isInCart(item.id)) {
            //windowModalContext.handleShow('El producto ya se encuentra en el carrito');  
            //alert('El producto ya se encuentra en el carrito');            
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

        /* console.log('setCartList', cartList); */
    }

/*     const count = () => {
        return cartList.length;
    } */

    const removeItem = (itemId) => {
        //console.log('itemId', itemId)
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

    const quantityTotal = () => {
        return (
            cartList.length === 0 ? 0 :
            cartList.reduce((total, item) => { return total += item.quantity }, 0)
        );
    }

    const priceTotal = () => {
        return (
            cartList.length === 0 ? 0 :
            cartList.reduce((total, item) => { return total += (item.quantity * item.price) }, 0)
        );
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, clear, isInCart, quantityTotal, priceTotal }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;