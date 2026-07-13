

    //Criando uma variaveis com informações do produto
   // let nome = "Tek Pix"
    //let preco = 220
   // let quantidade = 9
   
   
   //let frase = ""
   
   // if (quantidade > 300){
    //     frase="Você definiu uma quantidade muito grande"
    // }
    // else{
        //     frase= ""
        // }
        
        
              //<div className="bg-gray-300 text-blacwk w-50" >
        
                //<img  src="/" alt="" />
               // <h1 >Produto:{nome}</h1>
               // <h2>Valor:{preco}</h2>
              // <h3>Estoque:{quantidade}</h3>
               // <div className="flex gap-10">
              //  <button>➕</button>
               // <button>➖</button>
                
        
               // </div>
               // </div>


       //  <div className="bg-gray-300 text-blacwk w-50" >

       // <img  src="/" alt="" />
       // <h1 >Produto:{nome}</h1>
       // <h2>Valor:{preco}</h2>
       //<h3>Estoque:{quantidade}</h3>
       // <div className="flex gap-10">
       // <button>➕</button>
        //<button>➖</button>
        

        //</div>
        //</div>

     "use client"   
     import { useState } from "react"
        
export default function CorrecaoProduto(props){
            
  let frase = ""

const[contador, setContador] = useState(0)

function aumentar(){
    if(contador>10){
        frase="voce bateu olimite"
    }
    else{
        setContador(contador+1)

    }
}

function diminuir(){
    if(contador>-1){
        frase="Voce bateu o limite"
    }
    else
    {
        setContador(contador-1)
    }
}
if(contador >10){
    frase="Você definiu uma quatidade muito gradne"
}
else
{
    frase=""
}
    
return(
    <>
   <div className="bg-gray-300 text-blacwk w-50" >

        <img  src={props.imagem} alt="" />
        <h1 >Produto:{props.nome}</h1>
        <h2>Valor:{props.preco}</h2>
       <h3>quantidade:{contador}</h3> 
       <p className="text-red"> {props.texto}</p>
        <div className="flex gap-10">
        <button onClick={aumentar}>➕</button>
        <p>{contador}</p>
        <button onClick={diminuir}>➖</button>
        
<h1>{frase}</h1>
        </div>
        </div>


    </>





)
}
//no estoque que agora é cotador=props.quantidade=era