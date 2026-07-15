"use client"

import { useState } from "react"

export default function Atividade(){
    const [modal ,setModal] = useState(false)

    function Aparecer(){
        setModal(true)        
    }

    function fecha(){
        setModal(false)
    }
    let conteudo = null
    

    if( modal == true){
        conteudo = (<div className="bg-gray-200  flex flex-col items-center w-60 h-30  gap-5 rounded-lg ">
            <h1 className="text-black text-xl ">titulo do modal</h1>
            <p className="">Conteudo do site</p>
            <button className="bg-red-600 rounded-lg w-15" onClick={fecha}>fecha</button>
            </div>
        )

    }
    else
    {
        conteudo = null

    }

    
    return(
        <div>
            <p>Seja bem-vindo</p>          
            <button onClick={Aparecer}>aqui</button>
            {conteudo}
        </div>
            

    )

}