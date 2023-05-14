import './CartItem.css'
import { Link } from 'react-router-dom'

const CartItem = ({ item, qty }) => {
    return (
        <div className="cartItemCard">
        <Link className="cartLink" to={`/item/${item.idCat}/${item.id}`}>
                <img className="cartItemImage" src={item.img} alt="" />
                    <h4>{item.nombre}</h4>
                        <p>Cantidad: {qty}</p>
                        <p>Precio: U$S {item.precio}</p>
        </Link>
        </div>
    )
}

export default CartItem