import React from "react";
import Header from "../../components/header/header";
import "./styles.css"
import video from "../../assets/video.mp4"
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";




function Home () {

    return (
        <div>
            <Header />
            <div id='banner1'/>
            <div id='trailer-container'>
                <div className="content">
                   <video controls className="trailer">
                    <source src={video}/>
                    Seu navegador nao suporta vídeos
                   </video>
                   <div id="sinopse">
                    <p className="description">
                    Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.
                    </p>
                    <button className="button">comprar ingresso</button>
                   </div>
                </div>
            </div>
            <Cards/>

            <Footer />

        </div>
    )
}

export default Home;