import React from "react";
import './styles.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Matt from "../../assets/cast/Matt reeves.jpg";
import Rob from "../../assets/cast/Robert Pattinson.jpg";
import Zoe from "../../assets/cast/Zoe Kravitz.jpg";
import Andy from "../../assets/cast/Andy Serkis.jpg";
import John from "../../assets/cast/john tuturro.jpg";
import Colin from "../../assets/cast/Colin Farrell.jpg"
import Paul from "../../assets/cast/Paul Dano.jpg"
import Jeffrey from "../../assets/cast/Jefrey right.jpg"
import Jayme from "../../assets/cast/Jayme Lawson.jpg"




function Elenco () {

    return (
        <div>
           <Header />
           <div id="banner2"><p id="ELENCO">ELENCO</p></div>
           <div class="cast-container">
           <div className="direcao"> DIRETOR</div>
           <div className="texto_imagem">
            <img id="foto" src={Matt}/>
            <p class="descricao">Nome: Matthew George Reeves. 
               <br/> Nascimento: 27 de abril de 1966 (idade 56 anos).
               <br/> Altura: 1,73 m.
               <br/> Matthew George "Matt" Reeves é um diretor, roteirista e produtor de cinema americano. Reeves começou sua carreira como roteirista dos filmes Under Siege 2: Dark Territory e The Pallbearer, o último do qual estreou sua carreira como diretor de cinema.
              </p>

           </div>
           </div>

           <div className="atores"> ATORES </div>
           <div className="texto_imagem">
            <img id="foto" src={Rob}/>
            <p className="descricao">Nome: Robert Douglas Thomas Pattinson. 
                <br/> Nascimento: 13 de maio de 1986 (idade 36 anos).
                <br/> Altura: 1,85 m.
                <br/> Personagem: Bruce Wayne/Batman.
                <br/> Robert Douglas Thomas Pattinson é um ator, modelo e músico britânico. É mais conhecido por interpretar Edward Cullen nas cinco adaptações cinematográficas da saga Crepúsculo - Twilight, Bruce Wayne/Batman em The Batman de Matt Reeves pela DC .
              </p>
           </div>
           <div className="texto_imagem">
              <img id="foto" src={Zoe}/>
              <p className="descricao">Nome: Zoë Isabella Kravitz. 
                <br /> Nascimento: 1 de dezembro de 1988 (idade 33 anos).
                <br /> Altura: 1,57 m.
                <br /> Personagem: Selina Kyle/Mulher-gato. 
                <br /> Zoë Isabella Kravitz é uma atriz, modelo e cantora americana. Ela é a filha do cantor Lenny Kravitz e da atriz Lisa Bonet. Começou a carreira de atriz em 2007, contando já com participações em filmes como The Brave One, com Jodie Foster, No Reservations, com Catherine Zeta-Jones e X-Men: First Class. 
              </p>
            </div>
            <div className="texto_imagem">
            <img id="foto" src={Andy}/>
            <p className="descricao">Nome: Andrew Clement Serkis.
              <br/> Nascimento: 20 de abril de 1964 (idade 58 anos).
              <br/> Altura: 1,73 m.
              <br/> Personagem: Alfred Pennyworth.
              <br/> Andrew Clement "Andy" Serkis (Londres, 20 de abril de 1964) é um ator e cineasta britânico. Conhecido por interpretar personagens em computação gráfica, onde seu corpo e movimentação servem de molde para o personagem, seus principais papéis são Gollum na franquia The Lord of the Rings, King Kong (e no mesmo filme interpretou Lumpy, o cozinheiro do navio), Ceasar na série reboot da franquia Planet of the Apes e  o Supremo Líder Snoke em Star Wars: The Force Awakens, além de interpretar o Mordomo Alfred nas telonas.
            </p>
          </div>
          <div className="texto_imagem">
            <img id="foto" src={John}/>
            <p className="descricao">Nome: John Michael Turturro.
              <br/> Nascimento: 28 de fevereiro de 1957 (idade 65 anos).
              <br/> Altura: 1,84 m.
              <br/> Personagem: Carmine Falcone
              <br/> John Michael Turturro é um ator, roteirista e diretor americano, conhecido pelos seus papeis nos filmes Faça a Coisa Certa, Ajuste Final, Barton Fink, Quiz Show, O Grande Lebowski, E Aí, Meu Irmão, Cadê Você? e a franquia Transformers.
            </p>
          </div>
          <div class="texto_imagem">
            <img id="foto" src={Colin}/>
            <p class="descricao">Nome: Colin James Farrell.
              <br/> Nascimento: 31 de maio de 1976 (idade 46 anos).
              <br/> Altura: 1,78 m.
              <br/> Personagem: Oswald Cobblepot/Pinguim.
              <br/> Colin James Farrell é um ator irlandês. Estrelou filmes como Minority Report, Alexandre, Miami Vice, O Novo Mundo e Fantastic Beasts and Where to Find Them, S.W.A.T.. Em 2009 venceu o Globo de Ouro de Melhor Ator em Comédia ou Musical pelo seu papel de Ray no filme In Bruges.
            </p>
          </div>
          <div class="texto_imagem">
            <img id="foto" src={Paul}/>
            <p class="descricao">Nome: Paul Franklin Dano. 
              <br/> Nascimento: 19 de junho de 1984 (idade 38 anos).
              <br/> Altura: 1,84 m.
              <br/> Personagem: Edward Nigma/Charada.
              <br/> Paul Franklin Dano é um ator norte-americano. Atuou em filmes como L.I.E., The Girl Next Door, Little Miss Sunshine, There Will Be Blood, Prisoners, Okja e The Batman. Dano começou sua carreira na Broadway antes de fazer sua estreia no cinema em The Newcomers.
            </p>
          </div>
          <div class="texto_imagem">
            <img id="foto" src={Jeffrey}/>
            <p class="descricao">Nome: Jeffrey Wright.
              <br/> Nascimento: 7 de dezembro de 1965 (idade 56 anos).
              <br/> Altura: 1,80 m.
              <br/> Personagem: Comissário Gordon.
              <br/> Jeffrey Wright é um ator e produtor cinematográfico norte-americano. Foi formado em ciência política pela Amherst College, ele também interpretou o Detetive James Gordon no novo filme The Batman (2022).
            </p>
          </div>
          <div class="texto_imagem">
            <img id="foto" src={Jayme}/>
            <p class="descricao">Nome: Jayme Lawson.
              <br/> Nascimento: 19 de setembro de 1997 (idade 25 anos). 
              <br/> Personagem: Bella
              <br/> Caso nunca tenhas ouvido falar de Lawson, isso é porque The Batman vai marcar a sua estreia como atriz, agora que terminou, recentemente, a sua licenciatura da The Juilliard School, uma das principais escolas de artes cénicas do mundo. Ao que parece, a sua personagem terá grande relevo no filme, e, através de um vídeo entretanto tornado privado publicado no website da Juilliard, Lawson disse que o seu papel de sonho era interpretar Catwoman (Zoe Kravitz já foi revelada como dona e senhora do papel de Selina Kyle).
            </p>
              </div>
           <Footer/>
        </div>
    )
}

export default Elenco;