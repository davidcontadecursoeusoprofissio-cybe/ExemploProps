"use client"
import { useEffect, useState } from "react"

export default function ListaDeUsuariosBanco(){
   const [usuarios, setUsuarios] = useState([])
   const[nome, setNome] = useState("")
   const[idade, setIdade] = useState("")
   const[foto, setFoto] = useState("")


   async function cadastro(evento){
      evento.preventDefault()
     const  resposta = await fetch ("/api/users",{
      method: "POST",
      headers: {"Content-Type":"Aplication/json"},
      body: JSON.stringify({nome,idade:Number(idade),foto})
     })
   }


    
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
      <form onSubmit={cadastro}>
         <input type="text" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
         <input type="text" value={idade} onChange={(e)=>{setIdade(e.target.value)}}/>
         <input type="text" value={foto} onChange={(e)=>{setFoto(e.target.value)}}/>
         {/*type submit é um tipo de botao que une ao formulario logo toda vez que o botao for clicado o formulario unteiro ira reagir*/}
         <button type="submit">Cadastrar</button>
      </form>
      </>
      )

     


   
     
}