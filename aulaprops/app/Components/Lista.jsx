"use client"

import { useState } from "react"


export default function Lista()
{
//variavel tipo lista
const numeros = [1,2,3,4,5];


//map para mapear e manipular esses elementos
//arrow fuction(função sem nome ou abreviação de função):()=>{}
return(
    <>
        {numeros.map((numero) =>{
            if(numero == 3) {
                return null

            }else{
                
                return <p key={numero}>{numero}</p>
            }

        })
    }
        

        </>
    )
}
//div
//com o p
//Numeros:{numeros[1]}