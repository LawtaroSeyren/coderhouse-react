import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({cart:[]});

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);


    //guardo la info del carrito en localstorage
    useEffect(() => {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
          setCart(JSON.parse(savedCart));
        }
      }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);

    console.log(cart)

    //agregar items
    const addItem = (item, qty) => {
        const index = cart.findIndex((cartItem) => cartItem.item.id === item.id);
        if (index === -1) {
          // El item no está en el carrito, lo agregamos
          setCart((prev) => [...prev, { item, qty }]);
        } else {
          // El item ya está en el carrito, actualizamos su cantidad
          setCart((prev) => {
            const updatedCart = [...prev];
            updatedCart[index] = { ...updatedCart[index], qty: updatedCart[index].qty + qty };
            return updatedCart;
          });
        }
      };

    //remover items
    const suprItem = (itemId) => {
        const updatedCart = cart.filter((cartItem) => cartItem.item.id !== itemId);
        setCart(updatedCart)
    }
    

    //vaciar carrito

    const clearCart = () => {
        setCart([]);
    }

    //calcular cantidad de items total

    const totalItems = cart.reduce((total, product) => total + product.qty, 0)

    //precio total

    const totalPrice = cart.reduce((total, product) => total + (product.item.precio * product.qty), 0 )


    return (
        <CartContext.Provider value={{cart, addItem, suprItem, clearCart, totalItems, totalPrice}}>
            {children}
        </CartContext.Provider>
    )

}

