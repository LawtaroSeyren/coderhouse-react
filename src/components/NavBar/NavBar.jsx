import CartWidget from "../CartWidget/CartWidget"
import logo from '../../Images/logo.png'
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-custom">
    <div className="container">
        <Link to={"/"}>
            <img src={logo} className="logoIronClad" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to={"/category/living"} className="nav-link">LIVING</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/category/bathroom"} className="nav-link">BAÑO</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/category/bedroom"} className="nav-link">HABITACIÓN</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/category/office"} className="nav-link">OFICINA</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/category/garden"} className="nav-link">EXTERIORES</NavLink>
                </li>
            </ul>
            <CartWidget />
        </div>
    </div>
</nav>

  )
}

export default NavBar