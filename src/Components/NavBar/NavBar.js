import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./NavBar.css";
import logo from "./../../emunah-logo.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

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
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/categoria/2' >Productos</NavLink>
                <a href="">SOBRE MI</a>
                <a href="">CONTACTO</a>
                <NavLink to='/cart' >MI CARRITO</NavLink>
            </nav>
        </header>
    )
}

export default Header