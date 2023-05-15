import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "../CartItem/CartItem"
import './Cart.css'
import emptyCar from '../../Images/cart.png'

const Cart = () => {

    const {cart, clearCart, totalItems, totalPrice} = useContext(CartContext);


    if(totalItems === 0 ) {
        return (
            <>
            <div className="container">
            <div className='cartContainer'>
            <h2>No hay productos en el carrito</h2>
            <img className="emptyCar" src={emptyCar} alt="" /><br/>
            <Link className="checkOut" to="/"> Ver todos los productos </Link>
            </div></div>
            </>
        )
    } 

    return (
        <>
        <div className="container">
            <div className='cartContainer'>
                <div className="cartList">
                {cart.map((product) => <CartItem key={product.id} {...product} /> )}
            </div>
            <h3>Total: U$S {totalPrice}</h3>
            <Link className="buttonCart" onClick={clearCart}>Vaciar carrito</Link>
            <Link className="checkOut" to="/checkout">Finalizar Compra</Link>
        </div>
        </div>
        </>
    )

}

export default Cart;