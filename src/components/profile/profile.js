import React, { useContext } from "react";
import { userContext } from "../../stores/UserContext";

function Profile(){

const {login} = useContext(userContext)

    return(
        <div>
           {login ? 'dados do usuario' : 'faça seu login para possuir acesso'}
        </div>
    )
}

export default Profile;