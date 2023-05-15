import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { database } from "../../services/firebase/config"
import { CartContext } from "../context/CartContext"
import { collection, addDoc } from "firebase/firestore"
import emptyCar from '../../Images/cart.png'
import './Checkout.css'
import Cargando from "../Cargando/Cargando"

const Checkout = () => {

    const { cart, clearCart, totalItems, totalPrice } = useContext(CartContext)
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState("");
    const [telefono, setTelefono] = useState("");
    const [error, setError] = useState("");
    //uso useNavigate para dirigir a un nuevo componente en donde muestro el id de la orden
    const purchase = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailValid) {
            setError("Todos los campos son requeridos");
            return;
        }

        if (email !== emailValid) {
            setError("Las direcciones de e-mail deben coincidir");
            return;
        };

        const orden = {
            items: cart.map((product) => ({
                id: product.item.id,
                nombre: product.item.nombre,
                cantidad: product.qty,
            })),
            total: cart.reduce((total, product) => total + product.item.precio * product.qty, 0),
            nombre,
            apellido,
            telefono,
            email
        };

        try {
            setLoading(true); //comienza la carga de datos y se muestra loading
            const docRef = await addDoc(collection(database, "orders"), orden);
            clearCart();
            purchase(`/purchased/${docRef.id}`); //redirección al terminar la compra
        } catch (error) {
            console.log(error);
            setError("Ocurrió un error al procesar la compra. Intente de nuevo más tarde.");
        }

    };

    //por si alguien entra a este path sin tener nada en el carrito muestro el siguiente mensaje

    if (totalItems === 0) {
        return (
            <>
                <div className="container">
                    <div className='cartContainer'>
                        <h2>No hay productos en el carrito</h2>
                        <img className="emptyCar" src={emptyCar} alt="" /><br />
                        <Link className="checkOut" to="/"> ¡Compra algunos! </Link>
                    </div></div>
            </>
        )
    }

    //para esperar mientras se envian los datos

    if (loading) {
        return (<Cargando />)
    }

    return (
        <div className="container cartContainer">
            <h2>Finaliza tu compra:</h2>
            <form onSubmit={handleSubmit}>
            <hr />
                {cart.map((product) => (
                    <div key={product.item.id}>
                        <p><strong>{product.item.nombre}</strong> x {product.qty}</p>
                        <p>Precio: U$S {product.item.precio}</p>
                        <hr />
                    </div>
                ))
                }
                <h3>Total: U$S {totalPrice}</h3>
                <hr/>
                <div className="form">
                    <h4>Completa tus datos:</h4>
                    <div className="formGroup">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" id="lastName" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="phone">Teléfono</label>
                        <input type="text" id="phone" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="mail">Email</label>
                        <input type="email" id="mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="mailValid">Repetir Email</label>
                        <input type="email" id="mailValid" value={emailValid} onChange={(e) => setEmailValid(e.target.value)} />
                    </div>
                    <div className="form">
                        <button className="buttonSubmit" type="submit">Enviar datos y comprar</button>
                    </div>
                </div>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Checkout