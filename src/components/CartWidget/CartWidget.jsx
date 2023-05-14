import './CartWidget.css'
import iconCart from '../../Images/iconCart.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

  const {totalItems} = useContext(CartContext);

  return (
    <Link className="cartLinks" to="/cart">
      <img className='imgCart' src={iconCart} alt="Carrito" />
      <strong className="cartItems">{totalItems}</strong>
    </Link>
  )
}

export default CartWidget