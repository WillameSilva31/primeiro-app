import React from "react";
import './styles.css'


function Forms (){
    
    return(
        <div>
            <form className="coment-container" >
            <div className="coment">
                Gostaria de comentar algo?
                <br/>
                <br/>
                <label id="input" for="e-mail">E-mail</label>
                <input style="display:block" id="E-mail" type="email" placeholder="Insira seu email."></input>
                <label id="input" for="range"><br/>O quanto você gostou do filme?</label>
                 <input style="display: block;" id="range" type="range" name="range" />
                 <br/>O que achou do filme?
                    <textarea style="display: block" name="textao" type="textarea" id="mensagem" placeholder="Digite, o que achou do filme?" rows="10" cols="40">
                    </textarea>

                    <button>Enviar</button>
            </div>
            </form>
        </div>
    )

}

export default Forms;