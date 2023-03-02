import React from "react";
import logo from "../../assets/logo batman - Copia.jpg";
import "./styles.css";
import { Link } from "react-router-dom";


function Footer (){
    return(
        <div className="footer">
            <img id="logo" src={logo} />
            <span> Todos os direitos reservados©</span>
            <span> Desenvolvido por Willame Silva </span>
            <nav className="footer-navigation">
               <ul className="footer-list">
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
        </div>
    )


}





export default Footer;