"use client"
import { useEffect, useState } from "react"

export default function ListaDeUsuariosBanco(){
    const [usuario, serUsuarios] = useState([])
     useEffect(()=>{
        fetch("/api/users")
        .then((resposta) => resposta.json())
        .then((DadosDoBanco) => {
         setUsuarios(DadosDoBanco)
        })
        
     }, [])
}