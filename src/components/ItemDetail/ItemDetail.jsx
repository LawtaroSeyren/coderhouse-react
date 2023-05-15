import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, nombre, precio, img, desc, stock, idCat}) => {

  const [cartItems, setCartItems] = useState(0);


  const { addItem } = useContext(CartContext);


  const handleCount = (qty) => {
    setCartItems(qty);
    const item = { id, nombre, precio, idCat, img, desc, stock };
    addItem(item, qty);
  }

  return (
    <>
      <div className="container">
        <div className='itemContainer'>
          <div className="imageContainer">
            <img src={`/imgProducts/${img}`} alt={nombre} />
          </div>
          <div className="detailsContainer">
            <div className="titleContainer">
              <h2>{nombre}</h2>
              /
              <h4>ID: {id}</h4>
            </div>
            <h3>U$S{precio} </h3>
            <p>{desc}</p>
            <div className="countDiv">
              {cartItems > 0 ? (<div>
                <Link to={`/`} className="buttonContinue">Seguir comprando</Link>
                <Link to="/cart" className="buttonFinish">Finalizar compra</Link>
              </div>) : (
                <ItemCount inicial={1} stock={stock} onAdd={handleCount} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail;
