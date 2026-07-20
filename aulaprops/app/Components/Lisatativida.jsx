"use client"

import { useState } from "react"

export default function Lista1(){
    const numeros = ["Jose","Kauan","Maria","Kleiton"]

    return(
        <>
        {numeros.map((nome)=>{
            if(nome == "Jose"){
                return <p> {nome}: Você tem que pagar sua conta</p>

            }
            else
            {

                
                return <p Key={nome}>{nome}</p>
            }

        }
        )}
        
        
        
        
        
        </>
    )
}