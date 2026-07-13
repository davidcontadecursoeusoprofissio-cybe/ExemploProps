

    //Criando uma variaveis com informações do produto
    let nome = "Tek Pix"
    let preco = 220
    let quantidade = 0

    let frase = ""

    if (quantidade > 300){
        frase="Você definiu uma quantidade muito grande"
    }
    else{
        frase= ""
    }




export default function CorrecaoProduto(){
return(
    <>
   <div className="bg-gray-300" >

        <img  src="/" alt="" />
        <h1 >Produto:{nome}</h1>
        <h2>Valor:{preco}</h2>
       <h3>Estoque:{quantidade}</h3>
        <div className="flex gap-10">
        <button>➕</button>
        <button>➖</button>
        

        </div>
        </div>
    </>
        )
        }