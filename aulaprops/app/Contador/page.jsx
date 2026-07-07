"use client"
import { useState } from "react"

export default function contador(){
    const [contador,setContador]= useState(0)

    const [texto,setTexto]= useState("")

    function aumentar(){
        setContador(contador+1)
    }

    function diminuir(){
        setContador(contador-1)
    }

    function retornar(useState){
        setContador(0)
    }

    return(
        <>
<h1>{contador}</h1>
<button onClick={aumentar}>Botão Contador</button>
<input type="text" placeholder="digite aqui seu texto" value={texto} onChange={(e)=>setTexto(e.target.value)}/>


<p>Texto que você esta digitando:{texto}</p>
<p>quantas letras tem: {texto.length}</p>
        
        

<button onClick={diminuir}>Botão Contador</button>



<button onClick={retornar}>Botão Contador</button>
        </>
    )        
}