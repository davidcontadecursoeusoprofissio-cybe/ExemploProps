import dados from '../Data/Data.json'

export default function ItemNaoP(){
    return(


        <>
         {
        dados.map( (itens)=>{

            if(itens.status == false)
            
            
            return (
                
                 <p>  {itens.nome}  </p>
            ) 


        } )
       }
        
        </>
    )
}