//Criando compnente com props
//props= propriedade= atributo= caracteristica

export default  function Usuarios(props){
    return(
        <div>
        <h1>Nome:{props.nome}</h1>
        <h2>Email:{props.email}</h2>
        <p>Contato:{props.contato}</p>
    </div>
    )
}
 