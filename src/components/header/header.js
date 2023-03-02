import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo batman - Copia.jpg";
import './style.css';




function Header() {

    
    return(
        <header>
            <img id="logo" src={logo} />
            <nav>
                <ul>
                    <Link to="/" style={{textDecoration:'none'}}>
                <li>Home</li>
                    </Link>
                   <Link to="/elenco" style={{textDecoration:'none'}}>
                <li>Elenco</li>
                   </Link>
                   <Link to="/comentarios" style={{textDecoration:'none'}}>
                <li>Comentarios</li>
                   </Link>
                   <Link to="/fotos" style={{textDecoration:'none'}}>
                <li>Fotos</li>
                   </Link>
                </ul>
            </nav>
        </header>
    )
}


export default Header ;