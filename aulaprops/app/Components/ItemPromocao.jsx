import dados from '../Data/Data.json'

export default function ItemP(){
    return(


        <>
            {
        dados.map( (itens)=>{

            if(itens.status == true)
             
               return (
                
                 <p>  {itens.nome}  </p>
            ) 



        } )
       }
        </>
    )
}