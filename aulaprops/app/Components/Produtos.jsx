export default  function Produtos(props){
    return(
        <div>

        <h1>Nome:{props.nome}</h1>
        <p>Valor:{props.valor}</p>
        <p>Estoque:{props.estoque}</p>
        <img src={props.imagem} alt="" />
        <button>➕</button>
        <button>➖</button>
        </div>
    )
 }