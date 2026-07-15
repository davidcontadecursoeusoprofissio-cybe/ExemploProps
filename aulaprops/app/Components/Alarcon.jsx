"use client "


import { useState } from "react"


export default function togle(){

    const {modal, setModal} = useState(null)

    function apareceAi(){
        setModal(modal=true)
    }

   let conteudo = null

    if(modal == true)
    {

        
        conteudo = (
            <div>
            <p>Eba o modal abriu</p>
        </div>
    )
    }
else
    {

        conteudo = null
    }

    
    
    return(
        //Crie um state de nome state é o useState
        <>
    
        <div className="p-6 riuded-lg  bg-gray-900">
            
            <h1>Seja bem-vindo  ao modal que aparece e desaparece click para aparecer</h1>

            <button  onClick={apareceAi()}>aqui</button>
        </div>
      
        </>
    )
}