"use client"

export default function  ListaDePessoas() {

    //let usuario = {
        //nome: "Pedro",
       // idade: 25,
       // email: "pedro@gmail.com",
       // status: true
    // }

      //<h1>Lista de usuarios</h1>
       // <p>{usuario.nome}</p>
       // <p>{usuario.idade}</p>

    const usuario=[
        {
        nome: "Pedro",
        idade: 32,
        email: "pedro@gmail.com",
        status: false
    },
    {
          nome: "Maria",
        idade: 45,
        email: "Maria@gmail.com",
        status: true
    },
    {
          nome: "David",
        idade: 25,
        email: "David@gmail.com",
        status: false
    }
]
//acima fica o resto , variaveis, finções, metodos
// aqui ficar a parte de visualização
    return(
        <>
        <h1>Lista de usuarios</h1>
        {
            usuario.map((usuario)=>{

                if(usuario.status == false){
                   return console.log("Cadastro cancelado")               
                }
                else
                {                                        
                    return (
              <div key={usuario.email} className="bg-gray-200 w-50 h-25 m-10 ">
              <h1> Nome:{usuario.nome}</h1>
              <h2> Email:{usuario.email}</h2>
              <p> Idade :{usuario.idade}</p>
              <p>{usuario.status}</p>

                </div>
              ) 
            }
              

            })
        }
        </>
    )
}
//<h1 key={usuario.email}> Nome:{usuario.nome}</h1>
//<h2 key={usuario.email}> Email:{usuario.email}</h2>
// <p key={usuario.email}> Idade :{usuario.idade}</p>
// <p key={usuario.email}>{usuario.status}</p>