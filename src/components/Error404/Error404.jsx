import React from 'react'
import './Error404.css'
import imgError from '../../Images/bannerError.png'
import { Link } from 'react-router-dom'


const Error404 = () => {

    return (
        <>
            <div className="errorContainer">
                <h2>Error 404</h2>
                <h3>Parece que no hay nada por aquí...</h3>

                <img className = "imgError" src={imgError} />
                <div className = "container divButton">
                <Link to={"/"} className="errorLink">Volver</Link>
                </div>

            </div>
        </>
    )
}

export default Error404