import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, idCat}) => {
  return (
    <div className='productCard'>
        <p id="parrafoId">ID: {id} </p>
        <img className='productImg' src={img} alt={nombre} />
        <strong>{nombre} </strong>
        <p id="precio">U$S {precio} </p>
        <Link to={`/item/${idCat}/${id}`} className="buttonLink"> Detalles </Link>
        
    </div>
  )
}

export default Item