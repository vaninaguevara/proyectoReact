import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";
import logo from "./../../emunah-logo.jpg";

const Header = () => {
    return(
        <header>
            <div className="nav-registro">
                <a href="">Registrarme | </a>
                <a href="">Iniciar sesión</a>
            </div>
            <div className="logo-fondo">
                <img src={logo} alt="" />
            </div> 
            <nav>
                <a href="">PRODUCTOS</a>
                <a href="">SOBRE MI</a>
                <a href="">CONTACTO</a>
                <a href="">MI CARRITO <ShoppingCartIcon className="icono-carro"/></a>
            </nav>
        </header>
    )
}

export default Header