import './CartItem.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({ item, qty }) => {


    const {suprItem} = useContext(CartContext);

    return (
        <div className="cartItemCard">
        <Link className="cartLink" to={`/item/${item.idCat}/${item.id}`}>
                <img className="cartItemImage" src={item.img} alt="" />
                    <h4>{item.nombre}</h4>
                        <p>Cantidad: {qty}</p>
                        <p>Precio: U$S {item.precio}</p>

        </Link>
        <em className="delete" onClick={()=> {suprItem(item.id)}}>Eliminar</em>
        </div>
    )
}

export default CartItem