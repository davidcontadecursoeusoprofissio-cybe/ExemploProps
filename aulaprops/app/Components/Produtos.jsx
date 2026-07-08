"use client"

import { useState } from "react"

export default  function Produtos(props){
    const [Produtos,setProdutos]=useState(0)

    function aumentar(){
        setProdutos(Produtos+7.50)
    }

    function diminuir(){
        setProdutos(Produtos-7.50)
    }
    return(
        <div className="bg-gray-100 w-60 h-80 rounded-2xl  flex   flex-col items-center text-center  " >

        <img className="w-50 h-50 ml:100 mt-10" src={props.imagem} alt="" />
        <h1 >Nome:{props.nome}</h1>
        <p>Valor:{props.valor}</p>
        <p>Estoque:{props.estoque}</p>
        <div className="flex gap-10">
        <button onClick={aumentar}>➕</button>
        <p>{Produtos}</p>
        <button onClick={diminuir}>➖</button>
        

        </div>
        </div>
    )
 }