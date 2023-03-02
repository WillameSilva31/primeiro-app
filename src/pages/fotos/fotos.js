import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./styles.css"



function Fotos () {
    return (
        <div>
            <Header/>
            <div className="pictures-container">
                <div className="pictures-content">
                    <div className="picture picture-1"> Robert Pattinson - Batman </div>
                    <div className="picture picture-2"> Zoë Kravitz - Mulher gato </div>
                    <div className="picture picture-3"> Jeffrey Wright - Detetive Gordon </div>
                    <div className="picture picture-4"> Colin Farrell - Pinguim </div>
                    <div className="picture picture-5"> Backstage </div>
                    <div className="picture picture-6"> Backstage </div>
                    <div className="picture picture-7"> Backstage </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Fotos;