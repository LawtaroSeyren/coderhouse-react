import { useState } from "react"
import './ItemCount.css'
import { Link } from "react-router-dom"

const ItemCount = ({ inicial, stock, onAdd }) => {

    const [count, setCount] = useState(inicial)

    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrease = () => {
        if (count > inicial) {
            setCount(count - 1);
        }
    }

    return (
        <div className="countDiv">
        <Link className="buttonCount" onClick={decrease}>-</Link>
        <p className="countP">{count}</p>
        <Link className="buttonCount" onClick={increase}>+</Link><br/>
        <Link className="buttonAdd" onClick={() => onAdd(count)}>Agregar al Carrito</Link>
        </div>
    )
}

export default ItemCount