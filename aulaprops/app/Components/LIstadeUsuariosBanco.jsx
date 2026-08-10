"use client"
import { useEffect, useState } from "react"

export default function ListaDeUsuariosBanco(){
    const [usuarios, setUsuarios] = useState([])


    
    useEffect(()=>{
       fetch("/api/users")
       .then((resposta) => resposta.json())
       .then((DadosDoBanco) => {
          setUsuarios(DadosDoBanco)
         })
         
      }, [])
      
      return(
      <>
      {
         usuarios.map((usuario)=>{
            return(

            <li key={usuario.id}>
               {usuario.nome} - {usuario.idade}
            </li>
            )

         })
      }
      </>
      )

     


   
     
}