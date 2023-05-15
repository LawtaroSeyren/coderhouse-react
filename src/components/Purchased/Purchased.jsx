import imgHat from '../../Images/hat.png'
import { Link } from 'react-router-dom'
import './Purchased.css'
import { useParams } from 'react-router-dom'

const Purchased = () => {


    const {ordenId} = useParams();


    return (
        <>
            <div className="container">
                <div className='purchaseContainer'>
                    <h2>¡Gracias por tu compra! Tu número de orden es </h2>
                    <h3>{ordenId}</h3>
                    <img className="imgHat" src={imgHat} alt="" /><br />
                    <Link className="checkOut" to="/"> ¡Conoce más de nuestros productos! </Link>
                </div></div>
        </>
    )
}

export default Purchased