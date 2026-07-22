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
        status: true
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
        status: true
    }
]
//acima fica o resto , variaveis, finções, metodos
// aqui ficar a parte de visualização
    return(
        <>
        <h1>Lista de usuarios</h1>
        {
            usuario.map((usuario)=>{
              return (
                <>
              <p key={usuario.email}>{usuario.nome}</p>
              <p key={usuario.email}>{usuario.idade}</p>
              <p key={usuario.email}>{usuario.email}</p>
              <p key={usuario.email}>{usuario.status}</p>

                </>
              ) 
              

            })
        }
        </>
    )
}
