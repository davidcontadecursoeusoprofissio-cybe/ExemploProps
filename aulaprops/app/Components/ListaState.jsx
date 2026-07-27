"use client"

import { useState , useRef } from "react"

export default function ListaState(){


    const [lista, setLista] = useState([])
    // quando for uma lista que vai altera

    // Use ref é uma função ultilizado para pegar valos da TAG html
    const inputRef = useRef(null)

    function Adicionar(){
        const ValorDigitado = inputRef.current.value

        setLista([...lista, ValorDigitado]   )


    }



    return(
        <>
        <div>
        <h1>Lista simples com State</h1>
        <input type="text"  placeholder="Digite aqui sua tarefa do dia" ref={inputRef}/>
        <button onClick={Adicionar}>Enviar</button>
        </div>

        {lista.map ( (item,indice)=>{
            return <h3 key={indice}>{item}</h3>
        })}
        
        </>
    )

}