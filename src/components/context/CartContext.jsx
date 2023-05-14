import { createContext, useState } from "react";

export const CartContext = createContext({cart:[]});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    console.log(cart)

    //agregar items
    const addItem = (item, qty) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev, {item, qty}]);
        } else {
            console.log("Producto ya agregado")
        };
    }

    const isInCart = (id) => {
        return cart.some(product => product.id === id);
    }

    //remover items
    const suprItem = (id) => {
        const updatedCart = cart.filter(product => product.id !== id);
        setCart(updatedCart)
    }

    //vaciar carrito

    const clearCart = () => {
        setCart([]);
    }

    //calcular cantidad de items total

    const totalItems = cart.reduce((total, product) => total + product.qty, 0)


    return (
        <CartContext.Provider value={{cart, addItem, suprItem, clearCart, totalItems}}>
            {children}
        </CartContext.Provider>
    )

}

